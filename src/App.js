import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, Navbar, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class App extends Component {
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
