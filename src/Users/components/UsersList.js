import React, { PropTypes } from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

const sortIcon = (sortBy, column) => {
	if(!sortBy.descending && sortBy.type === column){
		return <Glyphicon bsClass="glyphicon sort" glyph="chevron-up" />;
	}
	if(sortBy.descending && sortBy.type === column){
		return <Glyphicon bsClass="glyphicon sort" glyph="chevron-down" />;
	}
	return null;
};

const Users = ({ sortBy, sortFunction, users }) => (
	<Table striped bordered condensed hover>
		<thead>
			<tr>
				<th onClick={() => sortFunction('id')}>#{sortIcon(sortBy, 'id')}</th>
				<th onClick={() => sortFunction('name')}>Name{sortIcon(sortBy, 'name')}</th>
				<th onClick={() => sortFunction('email')}>E-Mail{sortIcon(sortBy, 'email')}</th>
				<th onClick={() => sortFunction('username')}>Username{sortIcon(sortBy, 'username')}</th>
			</tr>
		</thead>
		<tbody>
			{users.map((user, i) =>
				<tr key={i}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.username}</td>
				</tr>
			)}
		</tbody>
	</Table>
);

Users.propTypes = {
	users: PropTypes.array.isRequired,
	sortBy: PropTypes.object.isRequired,
	sortFunction: PropTypes.func.isRequired
};

export default Users;
