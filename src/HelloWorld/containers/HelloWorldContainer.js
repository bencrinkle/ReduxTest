import { connect } from 'react-redux';
import { updateName } from '../actions/helloWorldActions';
import HelloWorld from '../components/HelloWorld';

const mapStateToProps = (state) => {
	return {
		value: state.name
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (name) => {
			dispatch(updateName(name));
		}
	};
};

const HelloWorldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HelloWorld);

export default HelloWorldContainer;
