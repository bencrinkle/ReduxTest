import React, {PropTypes} from 'react';
import { Panel, Image, Glyphicon, Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem, Badge, Button } from 'react-bootstrap';
import PartnerModal from './PartnerModal';

const getStars = (rating) => {
	let stars = [];
	for(let i = 1; i <= rating; i++){
		stars.push(<Glyphicon key={i} glyph="star" />);
	}
	return stars;
};

const Partners = ({partners, sort, filter, filteredBy, sortedBy, showModal, updateShowModal, modalPartner}) => (
	<Grid fluid>
		<Row className="m-b-10">
			<Col xs={10} md={10}>
				<p className="m-t-10">Showing <Badge>{partners.size}</Badge> partners</p>
			</Col>
			<Col xs={2} md={2}>
				<ButtonToolbar>
					<DropdownButton id="sort" title='Sort'>
						<MenuItem eventKey="1" onSelect={() => filteredBy === 'perDay' ? sort('phl-day') : sort('phl-hour')}>Price (High to Low)</MenuItem>
						<MenuItem eventKey="2" onSelect={() => filteredBy === 'perDay' ? sort('plh-day') : sort('plh-hour')}>Price (Low to High)</MenuItem>
						<MenuItem eventKey="3" onSelect={() => sort('rating')}>Rating</MenuItem>
						<MenuItem eventKey="4" onSelect={() => sort('distance')}>Distance</MenuItem>
					</DropdownButton>
					<DropdownButton id="filter" title='Filter'>
						<MenuItem eventKey="1" onSelect={() => filter('outOfHours')}>Out of Hours</MenuItem>
						<MenuItem eventKey="2" onSelect={() => filter('perHour')}>Per Hour</MenuItem>
						<MenuItem eventKey="2" onSelect={() => filter('perDay')}>Per Day</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
			</Col>
		</Row>
		{partners.map((partner, i) =>
			<Row key={i}>
				<Panel header={partner.getIn(['name'])}>
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
								<Col>
									{filteredBy === 'perDay' ?
										<p>from <span className="price">{'\u00A3' + partner.getIn(['dailyrate'])}</span> per day</p> :
										<p>from <span className="price">{'\u00A3' + partner.getIn(['hourlyrate'])}</span> per hour</p>}
								</Col>
								<Col>
									<ButtonToolbar>
										<Button onClick={() => updateShowModal(partner.getIn(['id']))}>More Info</Button>
										<Button bsStyle="success">Chat</Button>
									</ButtonToolbar>
								</Col>
							</Col>
						</Row>
					</Grid>
				</Panel>
			</Row>
		)}
		<PartnerModal partner={modalPartner} showModal={showModal} close={() => updateShowModal(-1)}/>
	</Grid>
);

Partners.propTypes = {
	partners: PropTypes.object.isRequired,
	filter: PropTypes.func.isRequired,
	sort: PropTypes.func.isRequired,
	filteredBy: PropTypes.string.isRequired,
	sortedBy: PropTypes.string.isRequired,
	showModal: PropTypes.bool.isRequired,
	updateShowModal: PropTypes.func.isRequired,
	modalPartner: PropTypes.object.isRequired
};

export default Partners;
