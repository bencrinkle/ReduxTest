import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter from './Counter/reducers/counter';
import helloWorld from './HelloWorld/reducers/helloWorld';
import posts from './PostsList/reducers/posts';

const reducers = combineReducers({counter, helloWorld, posts});
export default createStore(reducers, applyMiddleware(thunkMiddleware));
