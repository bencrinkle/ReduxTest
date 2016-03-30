import fetch from 'isomorphic-fetch';
import { fromJS } from 'immutable';

const getPartnersPendingAction = () => {
	return {
		type: 'GET_PARTNERS_PENDING'
	};
};

const getPartnersSuccessAction = (partners) => {
	return {
		type: 'GET_PARTNERS_SUCCESS',
		partners
	};
};

const getPartnersErrorAction = (error) => {
	return {
		type: 'GET_PARTNERS_ERROR',
		error
	};
};

const updateFilterAction = (filter) => {
	return {
		type: 'UPDATE_FILTER',
		filter
	};
};

const updateSortAction = (sort) => {
	return {
		type: 'UPDATE_SORT',
		sort
	};
};

const updateShowModalAction = (id) => {
	return {
		type: 'UPDATE_SHOW_MODAL',
		id
	};
};

export const getPartners = (industry) => {
	return (dispatch) => {
		dispatch(getPartnersPendingAction());
		return fetch('http://localhost:3000/partners?trade=' + industry).then(response => {
			if(response.ok){
				response.json().then(json => {
					dispatch(getPartnersSuccessAction(fromJS(json)));
				});
			} else {
				response.json().then(json => {
					dispatch(getPartnersErrorAction(fromJS(json)));
				});
			}
		})
		.catch(error => {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		});
	};
};

export const updateFilter = (filter) => {
	return (dispatch) => {
		dispatch(updateFilterAction(filter));
	};
};

export const updateSort = (sort) => {
	return (dispatch) => {
		dispatch(updateSortAction(sort));
	};
};

export const updateShowModal = (id) => {
	return (dispatch) => {
		dispatch(updateShowModalAction(id));
	};
};
