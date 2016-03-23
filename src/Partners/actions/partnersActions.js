import fetch from 'isomorphic-fetch';
import { fromJS } from 'immutable';

const gettingPartners = () => {
	return {
		type: 'GETTING_PARTNERS'
	};
};

const getPartnersSuccess = (partners) => {
	return {
		type: 'GET_PARTNERS_SUCCESS',
		partners
	};
};

const getPartnersError = (error) => {
	return {
		type: 'GET_PARTNERS_ERROR',
		error
	};
};

const updateIndustry = (industry) => {
	return {
		type: 'UPDATE_INDUSTRY',
		industry
	};
};

export const getPartners = (industry) => {
	return (dispatch) => {
		dispatch(gettingPartners());
		dispatch(updateIndustry(industry));
		return fetch('http://localhost:3000/partners?trade=' + industry).then(response => {
			if(response.ok){
				response.json().then(json => {
					dispatch(getPartnersSuccess(fromJS(json)));
				});
			} else {
				response.json().then(json => {
					dispatch(getPartnersError(fromJS(json)));
				});
			}
		})
		.catch(error => {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		});
	};
};
