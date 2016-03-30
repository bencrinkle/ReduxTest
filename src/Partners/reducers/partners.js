import {List, Map, fromJS } from 'immutable';
import _ from 'underscore';

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
	'sort': '',
	'show_modal': false,
	'modal_partner': Map()
});

const getPartnerModal = (partners, id) => {
	if(id === -1) { return Map(); }
	return fromJS(_.find(partners.toJS(), (partner) => partner.id === id));
};

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
		case 'UPDATE_SHOW_MODAL':
			return state.set('show_modal', !state.getIn(['show_modal'])).set('modal_partner', getPartnerModal(state.getIn(['partners']), action.id));
		default:
			return state;
	}
};

export default partners;
