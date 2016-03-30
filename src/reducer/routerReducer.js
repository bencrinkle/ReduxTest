import { LOCATION_CHANGE } from 'react-router-redux';
import {Map} from 'immutable';

const initialState = new Map({
  locationBeforeTransitions: null
});

const routerReducer = (state = initialState, action) => {
	console.log(action);
	switch(action.type){
		case LOCATION_CHANGE:
		console.log(action.payLoad);
			return state.merge(action.payLoad);
		default:
			return state;
	}
};

export default routerReducer;
