import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { getAllUsers, sortUsers } from '../actions/usersListActions';
import UsersList from '../components/UsersList';
import { Panel } from 'react-bootstrap';

const sort = (users, sortBy) => {
	const sortedUsers = _.sortBy(users, sortBy.type);
	return sortBy.descending ? sortedUsers.reverse() : sortedUsers;
};

class UsersListContainer extends Component {
	componentDidMount(){
		this.props.dispatch(getAllUsers());
	}
	render(){
		const { sortBy, users, sortFunction } = this.props;
		return(
			<Panel>
				<UsersList sortFunction={sortFunction} sortBy={sortBy} users={users}/>
			</Panel>
		);
	}
}

UsersListContainer.propTypes = {
	users: PropTypes.array.isRequired,
	sortBy: PropTypes.object.isRequired,
	sortFunction: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		users: sort(state.usersList.users, state.usersList.sortBy),
		sortBy: state.usersList.sortBy,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sortFunction: (sortByType) => {
			dispatch(sortUsers(sortByType));
		},
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
