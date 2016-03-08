export const updateName = (event) => {
	return {
		type: 'UPDATE_NAME',
		name: event.target.value
	};
};
