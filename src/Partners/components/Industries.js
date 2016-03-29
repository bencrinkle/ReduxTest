import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Industries = ({selectIndustry, industries}) => (
	<Grid fluid>
		<Row>
			{industries.map((industry, i) => {
				return(
					<Col key={i} xs={12} md={4} lg={3}>
						<LinkContainer to={{ pathname: 'partners/' + industry}}>
							<div className="trade" onClick={() => selectIndustry(industry)}>
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
	selectIndustry: PropTypes.func.isRequired,
	industries: PropTypes.object.isRequired
};

export default Industries;
