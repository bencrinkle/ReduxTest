import React, { PropTypes } from 'react';

const HelloWorld = ({ onChange, value}) => (
	<div>
		<p>A simple hello world type component, add text to the input to see it appear above. This demonstrates a simple binding with state</p>
		<p>Hello {value}</p>
		<input type="text" onChange={onChange}/>
	</div>
);

HelloWorld.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default HelloWorld;
