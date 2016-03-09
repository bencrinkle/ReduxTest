import fetch from 'isomorphic-fetch';

const getUsersSuccess = (users) => {
	return {
		type: 'GET_USERS',
		users
	};
};

export const updateSortBy = (sortBy) => {
	return {
		type: 'UPDATE_SORT_BY',
		sortBy
	};
};

export const getAllUsers = () => {
  return (dispatch) => {
      return fetch('http://jsonplaceholder.typicode.com/users')
      .then(req => req.json())
      .then(json => dispatch(getUsersSuccess(json)));
  };
};
