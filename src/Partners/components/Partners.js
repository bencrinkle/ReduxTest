import React, {PropTypes} from 'react';
import { Panel, Image, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

const getStars = (rating) => {
	let stars = [];
	for(let i = 1; i <= rating; i++){
		stars.push(<Glyphicon key={i} glyph="star" />);
	}
	return stars;
};

const Partners = ({partners}) => (
	<div>
		{partners.map((partner, i) =>
			<Panel key={i} header={partner.getIn(['name'])}>
				<Grid fluid>
					<Row>
						<Col className="partner-panel-left" xs={12} md={2}>
							<Image src={partner.getIn(['image'])} rounded />
							<p className="rating">{getStars(partner.getIn(['rating']))}</p>
						</Col>
						<Col xs={12} md={8}>
							<p>{partner.getIn(['summary'])}</p>
							<p><Glyphicon glyph="map-marker"/> {partner.getIn(['milesaway'])} miles from you</p>
						</Col>
						<Col xs={12} md={2}>
							<p>from <span className="price">{partner.getIn(['hourlyrate'])}</span> per hour</p>
						</Col>
					</Row>
				</Grid>
			</Panel>
		)}
	</div>
);

Partners.propTypes = {
	partners: PropTypes.object.isRequired
};

export default Partners;
