import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Panel, ProgressBar} from 'react-bootstrap';
import Industries from '../components/Industries';
import Partners from '../components/Partners';
import { getPartners } from '../actions/partnersActions';

class PartnersContainer extends Component {
	componentDidMount(){
		if(this.props.params.industry){
			this.props.dispatch(getPartners(this.props.params.industry));
		}
	}
	render(){
		const { partners, isFetching, handleClick, params, industries } = this.props;
		const content = isFetching ? <ProgressBar active now={45} /> : <Partners partners={partners}/>;
		return(
			<Panel>
				{!params.industry ? <Industries industries={industries} handleClick={handleClick} /> : content}
			</Panel>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		partners: state.partners.getIn(['partners']),
		isFetching: state.partners.getIn(['getting_partners']),
		industries: state.partners.getIn(['industries'])
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
	params: PropTypes.object.isRequired,
	isFetching: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	industries:PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer);
