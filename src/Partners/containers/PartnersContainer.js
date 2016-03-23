import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Panel, ProgressBar} from 'react-bootstrap';
import Industries from '../components/Industries';
import Partners from '../components/Partners';
import { getPartners } from '../actions/partnersActions';

class PartnersContainer extends Component {
	componentDidUnmount(){
		dispatch(updateIndustry(''));
	}
	render(){
		const { partners, isFetching, handleClick, industry } = this.props;
		const content = isFetching ? <ProgressBar active now={45} /> : <Partners partners={partners}/>;
		return(
			<Panel>
				{industry === '' ? <Industries handleClick={handleClick} /> : content}
			</Panel>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		partners: state.partners.getIn(['partners']),
		industry: state.partners.getIn(['industry']),
		isFetching: state.partners.getIn(['getting_partners'])
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (industry) => {
			return dispatch(getPartners(industry));
		},
		dispatch
	};
};

PartnersContainer.propTypes = {
	partners: PropTypes.object.isRequired,
	industry: PropTypes.string.isRequired,
	isFetching: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer);
