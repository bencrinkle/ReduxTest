//Utils
import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexLink, Link, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//Containers
import CounterContainer from './Counter/containers/CounterContainer';
import HelloWorldContainer  from './HelloWorld/containers/HelloWorldContainer';
import PostsListContainer from './PostsList/containers/PostsListContainer';
//Reducers
import counter from './Counter/reducers/counter';
import helloWorld from './HelloWorld/reducers/helloWorld';
import posts from './PostsList/reducers/posts';
const reducers = combineReducers({counter, name: helloWorld, posts});
//Store
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const root = document.getElementById('app');

class App extends Component {
	render(){
		return(
			<div>
				<IndexLink to="/">Home</IndexLink>
				<Link to="counter">Counter</Link>
				<Link to="postsList">Posts</Link>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HelloWorldContainer} />
		<Route path="helloworld" component={HelloWorldContainer} />
		<Route path="counter" component={CounterContainer}/>
		<Route path="postsList" component={PostsListContainer}/>
	</Route>
);

render((
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>
), root);
