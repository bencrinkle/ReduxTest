import {List, Map} from 'immutable';

const initialState = Map({
	'getting_partners': false,
	'partners': List(),
	'errors': List(),
	'industry': ''
});

const partners = (state = initialState, action ) => {
	switch(action.type){
		case 'GETTING_PARTNERS':
			return state.set('getting_partners', true);
		case 'GET_PARTNERS_SUCCESS':
			return state.set('partners', action.partners).set('getting_partners', false);
		case 'GET_PARTNERS_ERROR':
			return state.set('errors', action.errors).set('getting_partners', false);
		case 'UPDATE_INDUSTRY':
			return state.set('industry', action.industry);
		default:
			return state;
	}
};

export default partners;
