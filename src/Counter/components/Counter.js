import React, { PropTypes } from 'react';

const Counter = ({value, onIncrement, onDecrement}) => (
	<div>
		<p>A simple counter component, click the + or - buttons to increment or decrement the counter. This demonstrates simple binding with state.</p>
		<p>{value}</p>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
};

export default Counter;
