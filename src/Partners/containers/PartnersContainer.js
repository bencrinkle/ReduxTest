import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Panel, ProgressBar} from 'react-bootstrap';
import Industries from '../components/Industries';
import Partners from '../components/Partners';
import { getPartners } from '../actions/partnersActions';

class PartnersContainer extends Component {
	render(){
		const { partners, isFetching, handleClick } = this.props;
		return(
			<Panel>
				<Industries handleClick={handleClick} />
				{isFetching ? <ProgressBar active now={45} /> : <Partners partners={partners}/>}
			</Panel>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		partners: state.partners.getIn(['partners']),
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
	isFetching: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer);
