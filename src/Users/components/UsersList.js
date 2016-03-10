import React, { Component, PropTypes } from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

export default class Users extends Component {
	render(){
		const { sortBy, sortFunction, users } = this.props;
		const usersRows = users.map((user, i) =>
						<tr key={i}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.username}</td>
						</tr>);
		const sortIcon = (column) => {
			if(!sortBy.descending && sortBy.type === column){
				return <Glyphicon bsClass="glyphicon sort" glyph="chevron-up" />;
			}
			if(sortBy.descending && sortBy.type === column){
				return <Glyphicon bsClass="glyphicon sort" glyph="chevron-down" />;
			}
			return null;
		};
		return(
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th onClick={() => sortFunction('id')}>#{sortIcon('id')}</th>
						<th onClick={() => this.props.sortFunction('name')}>Name{sortIcon('name')}</th>
						<th onClick={() => this.props.sortFunction('email')}>E-Mail{sortIcon('email')}</th>
						<th onClick={() => this.props.sortFunction('username')}>Username{sortIcon('username')}</th>
					</tr>
				</thead>
				<tbody>
					{usersRows}
				</tbody>
			</Table>
		);
	}
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	sortBy: PropTypes.object.isRequired,
	sortFunction: PropTypes.func.isRequired
};
