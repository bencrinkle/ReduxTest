import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';

export default class Users extends Component {
	render(){
		const users = this.props.users.map((user, i) =>
						<tr key={i}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.username}</td>
						</tr>);
		return(
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>E-Mail</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					{users}
				</tbody>
			</Table>
		);
	}
}

Users.propTypes = {
	users: PropTypes.array.isRequired
};
