import React, { PropTypes } from 'react';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

const Counter = ({value, onIncrement, onDecrement}) => (
	<Panel>
		<p>A simple counter component, click the + or - buttons to increment or decrement the counter. This demonstrates simple binding with state.</p>
		<p>{value}</p>
		<ButtonToolbar>
			<Button bsStyle="success" onClick={onIncrement}>+</Button>
			<Button bsStyle="danger" onClick={onDecrement}>-</Button>
		</ButtonToolbar>
	</Panel>
);

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
};

export default Counter;
