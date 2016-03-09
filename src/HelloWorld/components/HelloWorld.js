import React, { PropTypes } from 'react';
import { Panel, Input } from 'react-bootstrap';

const HelloWorld = ({onChange, value}) => (
	<Panel>
		<p>A simple hello world type component, add text to the input to see it appear below. This demonstrates a simple binding with state</p>
		<p>Hello {value}</p>
		<Input
			type="text"
			placeholder="Enter text"
			onChange={onChange}
		/>
	</Panel>
);

HelloWorld.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default HelloWorld;
