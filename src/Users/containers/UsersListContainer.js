import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, updateSortBy } from '../actions/usersListActions';
import UsersList from '../components/UsersList';
import _ from 'underscore';
import { Panel } from 'react-bootstrap';

const sortUsers = (users, sortByType, descending) => {
	const sortedUsers = _.sortBy(users, sortByType);
	return descending ? sortedUsers.reverse() : sortedUsers;
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
	dispatch: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired,
	sortBy: PropTypes.object.isRequired,
	sortFunction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		users: sortUsers(state.usersList.users, state.usersList.sortBy.type, state.usersList.sortBy.descending),
		sortBy: state.usersList.sortBy
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sortFunction: (sortByType) => {
			dispatch(updateSortBy(sortByType));
		},
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
