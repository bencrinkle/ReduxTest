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
							'TV & Aerial Installer')
});

const partners = (state = initialState, action ) => {
	switch(action.type){
		case 'GETTING_PARTNERS':
			return state.set('getting_partners', true);
		case 'GET_PARTNERS_SUCCESS':
			return state.set('partners', action.partners).set('getting_partners', false);
		case 'GET_PARTNERS_ERROR':
			return state.set('errors', action.errors).set('getting_partners', false);
		default:
			return state;
	}
};

export default partners;
