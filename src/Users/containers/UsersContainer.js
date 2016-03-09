import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../actions/usersActions';
import Users from '../components/Users';

class UsersContainer extends Component {
	componentDidMount(){
		this.props.dispatch(getAllUsers());
	}
	render(){
		return(
			<div>
				<Users users={this.props.users}/>
			</div>
		);
	}
}

UsersContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps)(UsersContainer);
