const initialState = {
	users: [],
	sortBy: {
		type: '',
		descending: false
	}
};

const userList = (state = initialState, action) => {
	switch(action.type){
		case 'GET_USERS':
			return Object.assign({}, state, {users: action.users});
		case 'UPDATE_SORT_BY':
			let descending = state.sortBy.descending;
			if((action.sortByType !== state.sortBy.type) || state.sortBy.type === ''){ descending = true; }
			return Object.assign({}, state, {sortBy: { type: action.sortByType, descending: !descending }});
		default:
			return state;
	}
};

export default userList;
