import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const clean = (industry) => {
	return industry.split(' ').join('_').toLowerCase();
};

const Industries = ({handleClick, industries}) => (
	<Grid fluid>
		<Row>
			{industries.map((industry, i) => {
				return(
					<Col key={i} xs={12} md={4} lg={3}>
						<LinkContainer to={{ pathname: 'partners/' + industry}}>
							<div className="trade" onClick={() => handleClick(industry)}>
								
								<span>{industry}</span>
							</div>
						</LinkContainer>
					</Col>
				);
			})}
		</Row>
	</Grid>
);

Industries.propTypes = {
	handleClick: PropTypes.func.isRequired,
	industries: PropTypes.object.isRequired
};

export default Industries;
