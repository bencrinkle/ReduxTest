const initialState = {
	users: [],
	sortBy: ''
};

const userList = (state = initialState, action) => {
	switch(action.type){
		case 'GET_USERS':
			return Object.assign({}, state, {users: action.users});
		case 'UPDATE_SORT_BY':
			return Object.assign({}, state, {sortBy: action.sortBy});
		default:
			return state;
	}
};

export default userList;
