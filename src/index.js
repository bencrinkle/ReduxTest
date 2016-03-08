//Utils
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//Containers
import CounterContainer from './Counter/containers/CounterContainer';
import HelloWorldContainer  from './HelloWorld/containers/HelloWorldContainer';
import PostsListContainer from './PostsList/containers/PostsListContainer';
//Store
import store from './store';

const root = document.getElementById('app');

render(
	<Provider store={store}>
		<div>
			<CounterContainer />
			<HelloWorldContainer />
			<PostsListContainer/>
		</div>
	</Provider>,
	root
);
