//Utils
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';

//Containers
import App from './App';
import CounterContainer from './Counter/containers/CounterContainer';
import HelloWorldContainer  from './HelloWorld/containers/HelloWorldContainer';
import PostsListContainer from './PostsList/containers/PostsListContainer';
import UsersListContainer from './Users/containers/UsersListContainer';
import PartnersContainer from './Partners/containers/PartnersContainer';

//Store
const store = configureStore({});

const history = syncHistoryWithStore(browserHistory, store);

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
		<Router history={history}>
			{routes}
		</Router>
	</Provider>
), root);
