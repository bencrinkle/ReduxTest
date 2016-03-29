//Utils
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//Containers
import App from './App';
import CounterContainer from './Counter/containers/CounterContainer';
import HelloWorldContainer  from './HelloWorld/containers/HelloWorldContainer';
import PostsListContainer from './PostsList/containers/PostsListContainer';
import UsersListContainer from './Users/containers/UsersListContainer';
import PartnersContainer from './Partners/containers/PartnersContainer';
//Reducers
import counter from './Counter/reducers/counter';
import helloWorld from './HelloWorld/reducers/helloWorld';
import posts from './PostsList/reducers/posts';
import usersList from './Users/reducers/usersList';
import partners from './Partners/reducers/partners';
const reducers = combineReducers({counter, name: helloWorld, posts, usersList, partners});
//Store
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const root = document.getElementById('app');

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HelloWorldContainer} />
		<Route path="counter" component={CounterContainer}/>
		<Route path="postsList" component={PostsListContainer}/>
		<Route path="usersList" component={UsersListContainer}/>
		<Route path="partners(/:industry)" component={PartnersContainer}/>
	</Route>
);

render((
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>
), root);
