import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Industries = ({handleClick}) => (
	<Grid fluid>
		<Row>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Bricklayer')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Bricklayer</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Builder')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Builder</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Cleaner')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Cleaner</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Decorator')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Decorator</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Electrician')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Electrician</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Gardener')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Gardener</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Handyman')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Handyman</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Heating Engineer')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Heating Engineer</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Joiner')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Joiner</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Plasterer')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Plasterer</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Plumber')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Plumber</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Roofer')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Roofer</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('Tiler')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>Tiler</span>
				</div>
			</Col>
			<Col xs={12} md={4} lg={3}>
				<div className="trade" onClick={() => handleClick('TV & Aerial Installer')}>
					<img className="img-rounded" src="images/Bricklayer.png" width="90%"/>
					<span>TV & Aerial Installer</span>
				</div>
			</Col>
		</Row>
	</Grid>
);

Industries.propTypes = {
	handleClick: PropTypes.func.isRequired
};

export default Industries;
