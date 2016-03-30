import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//Reducers
import counter from '../Counter/reducers/counter';
import helloWorld from '../HelloWorld/reducers/helloWorld';
import posts from '../PostsList/reducers/posts';
import usersList from '../Users/reducers/usersList';
import partners from '../Partners/reducers/partners';
import routerReducer from '../reducer/routerReducer';
const reducers = combineReducers({counter, name: helloWorld, posts, usersList, partners, routing: routerReducer});

export default function configureStore(initialState) {
	const store = createStore(reducers, initialState, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	return store;
}
