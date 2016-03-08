import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
	return {
		value: state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => {
			dispatch(incrementCounter());
		},
		onDecrement: () => {
			dispatch(decrementCounter());
		}
	};
};

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default CounterContainer;
