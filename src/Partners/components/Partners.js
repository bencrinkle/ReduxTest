import React, {PropTypes} from 'react';
import {Table, Glyphicon} from 'react-bootstrap';

const getStars = (rating) => {
	let stars = [];
	for(let i = 1; i <= rating; i++){
		stars.push(<Glyphicon key={i} glyph="star" />);
	}
	return stars;
};

const Partners = ({partners}) => (
	<Table striped bordered condensed hover>
		<thead>
			<tr>
				<th>Name</th>
				<th>Trade</th>
				<th>Postcode</th>
				<th>Hourly Rate</th>
				<th>Rating</th>
			</tr>
		</thead>
		<tbody>
			{partners.map((partner, i) =>
				<tr key={i}>
					<td>{partner.getIn(['name'])}</td>
					<td>{partner.getIn(['trade'])}</td>
					<td>{partner.getIn(['postcode'])}</td>
					<td>{partner.getIn(['rate'])}</td>
					<td>{getStars(partner.getIn(['rating']))}</td>
				</tr>
			)}
		</tbody>
	</Table>
);

Partners.propTypes = {
	partners: PropTypes.object.isRequired
};

export default Partners;
