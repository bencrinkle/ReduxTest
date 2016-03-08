import React, { PropTypes } from 'react';

const HelloWorld = ({ onChange, value}) => (
	<div>
		<p>{value}</p>
		<input type="text" onChange={onChange}/>
	</div>
);

HelloWorld.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default HelloWorld;
