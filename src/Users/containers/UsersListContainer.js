import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, updateSortBy } from '../actions/usersListActions';
import UsersList from '../components/UsersList';
import _ from 'underscore';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

const sortUsers = (users, sortBy) => {
	return _.sortBy(users, sortBy);
};

class UsersListContainer extends Component {
	componentDidMount(){
		this.props.dispatch(getAllUsers());
	}
	handleSort(sortBy){
		console.log(sortBy);
		this.props.dispatch(updateSortBy(sortBy));
	}
	render(){
		return(
			<Panel>
				<ButtonToolbar>
					<Button onClick={this.handleSort('name')}>Name</Button>
					<Button>Email</Button>
					<Button>Username</Button>
				</ButtonToolbar>
				<UsersList users={this.props.users}/>
			</Panel>
		);
	}
}

UsersListContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		users: sortUsers(state.usersList.users, state.usersList.sortBy)
	};
};

export default connect(mapStateToProps)(UsersListContainer);
