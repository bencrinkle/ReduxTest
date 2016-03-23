//Utils
import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//Containers
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
//Bootstrap
import { Nav, NavItem, Navbar, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const root = document.getElementById('app');

class App extends Component {
	render(){
		return(
			<Grid>
				<Row>
					<Col xs={12} md={12}>
						<PageHeader>React/Redux Playground <small>A playground for some basic React/Redux concepts</small></PageHeader>
						<Navbar>
							<Nav bsStyle="pills" activeKey={1}>
								<IndexLinkContainer to={{ pathname: '/'}}><NavItem eventKey={1} title='Home'>Home</NavItem></IndexLinkContainer>
								<LinkContainer to={{ pathname: 'counter'}}><NavItem eventKey={2} title='Counter'>Counter</NavItem></LinkContainer>
								<LinkContainer to={{ pathname: 'postsList'}}><NavItem eventKey={3} title='Posts'>Posts</NavItem></LinkContainer>
								<LinkContainer to={{ pathname: 'usersList'}}><NavItem eventKey={4} title='Users'>Users</NavItem></LinkContainer>
								<LinkContainer to={{ pathname: 'partners'}}><NavItem eventKey={5} title='Partners'>Partners</NavItem></LinkContainer>
							</Nav>
						</Navbar>
						{this.props.children}
					</Col>
				</Row>
			</Grid>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HelloWorldContainer} />
		<Route path="counter" component={CounterContainer}/>
		<Route path="postsList" component={PostsListContainer}/>
		<Route path="usersList" component={UsersListContainer}/>
		<Route path="partners" component={PartnersContainer}/>
		<Route path="partners" component={PartnersContainer}/>
	</Route>
);

render((
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>
), root);
