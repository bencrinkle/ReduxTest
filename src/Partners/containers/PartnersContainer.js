import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import Industries from '../components/Industries';
import Partners from '../components/Partners';
import { getPartners, updateFilter, updateSort, updateShowModal } from '../actions/partnersActions';
import { fromJS } from 'immutable';

const filterPartners = (partners, filter) => {
	partners = partners.toJS();
	switch(filter){
		case 'perDay':
			return fromJS(_.filter(partners, (partner) => { return partner.dailyrate > 0; }));
		case 'perHour':
			return fromJS(_.filter(partners, (partner) => { return partner.hourlyrate > 0; }));
		case 'outOfHours':
			return fromJS(_.filter(partners, (partner) => { return partner.outofhours; }));
		default:
			return fromJS(partners);
	}
};

const sortPartners = (partners, sort) => {
	partners = partners.toJS();
	switch(sort){
		case 'phl-day':
			return fromJS(_.sortBy(partners, 'dailyrate')).reverse();
		case 'plh-day':
			return fromJS(_.sortBy(partners, 'dailyrate'));
		case 'phl-hour':
			return fromJS(_.sortBy(partners, 'hourlyrate')).reverse();
		case 'plh-hour':
			return fromJS(_.sortBy(partners, 'hourlyrate'));
		case 'rating':
			return fromJS(_.sortBy(partners, 'rating')).reverse();
		case 'distance':
			return fromJS(_.sortBy(partners, 'milesaway'));
		default:
			return fromJS(partners);
	}
};

class PartnersContainer extends Component {
	componentDidMount(){
		if(this.props.params.industry){
			this.props.dispatch(getPartners(this.props.params.industry));
		}
	}
	render(){
		const { partners, isFetching, selectIndustry, params, industries, sort, filter, filteredBy, sortedBy, showModal, updateModal, modalPartner } = this.props;
		const content = isFetching ? <div className="loader">Loading...</div> : <Partners sort={sort}
																							filter={filter}
																							sortedBy={sortedBy}
																							filteredBy={filteredBy}
																							partners={partners}
																							modalPartner={modalPartner}
																							showModal={showModal}
																							updateShowModal={updateModal}/>;
		return(
			<Panel>
				{!params.industry ? <Industries industries={industries} selectIndustry={selectIndustry} /> : content}
			</Panel>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		partners: sortPartners(filterPartners(state.partners.getIn(['partners']), state.partners.getIn(['filter'])), state.partners.getIn(['sort'])),
		isFetching: state.partners.getIn(['getting_partners']),
		industries: state.partners.getIn(['industries']),
		filteredBy: state.partners.getIn(['filter']),
		sortedBy: state.partners.getIn(['sort']),
		showModal: state.partners.getIn(['show_modal']),
		modalPartner: state.partners.getIn(['modal_partner'])
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectIndustry: (industry) => {
			return dispatch(getPartners(industry));
		},
		filter: (filter) => {
			return dispatch(updateFilter(filter));
		},
		sort: (sort) => {
			return dispatch(updateSort(sort));
		},
		updateModal: (id) => {
			return dispatch(updateShowModal(id));
		},
		dispatch
	};
};

PartnersContainer.propTypes = {
	partners: PropTypes.object.isRequired,
	params: PropTypes.object.isRequired,
	industries:PropTypes.object.isRequired,
	isFetching: PropTypes.bool.isRequired,
	selectIndustry: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	sort: PropTypes.func.isRequired,
	filter: PropTypes.func.isRequired,
	filteredBy: PropTypes.string.isRequired,
	sortedBy: PropTypes.string.isRequired,
	updateModal: PropTypes.func.isRequired,
	showModal: PropTypes.bool.isRequired,
	modalPartner: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer);
