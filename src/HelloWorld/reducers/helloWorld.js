const helloWorld = (state = '', action) => {
	switch(action.type){
		case 'UPDATE_NAME':
			return action.name;
		default:
			return state;
	}
};

export default helloWorld;
