import fetch from 'isomorphic-fetch';

const getUsersSuccess = (users) => {
	return {
		type: 'GET_USERS',
		users
	};
};

export const sortUsers = (sortByType) => {
	return {
		type: 'SORT_USERS',
		sortByType
	};
};

export const getAllUsers = () => {
  return (dispatch) => {
      return fetch('http://jsonplaceholder.typicode.com/users')
      .then(req => req.json())
      .then(json => dispatch(getUsersSuccess(json)));
  };
};
