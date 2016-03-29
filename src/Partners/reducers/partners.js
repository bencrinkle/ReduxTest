import {List, Map} from 'immutable';

const initialState = Map({
	'getting_partners': false,
	'partners': List(),
	'errors': List(),
	'industries': List.of('Bricklayer',
							'Builder',
							'Cleaner',
							'Decorator',
							'Electrician',
							'Gardener',
							'Handyman',
							'Heating Engineer',
							'Joiner',
							'Plasterer',
							'Plumber',
							'Roofer',
							'Tiler',
							'TV & Aerial Installer'),
	'filter': '',
	'sort': ''
});

const partners = (state = initialState, action ) => {
	switch(action.type){
		case 'GET_PARTNERS_PENDING':
			return state.set('getting_partners', true);
		case 'GET_PARTNERS_SUCCESS':
			return state.set('partners', action.partners).set('getting_partners', false);
		case 'GET_PARTNERS_ERROR':
			return state.set('errors', action.errors).set('getting_partners', false);
		case 'UPDATE_FILTER':
			return state.set('filter', action.filter);
		case 'UPDATE_SORT':
			return state.set('sort', action.sort);
		default:
			return state;
	}
};

export default partners;
