import fetch from 'isomorphic-fetch';

const getPostsSuccess = (posts) => {
	return {
		type: 'GET_POSTS',
		posts
	};
};

export function getPosts() {
  return (dispatch) => {
      return fetch('http://jsonplaceholder.typicode.com/posts')
      .then(req => req.json())
      .then(json => dispatch(getPostsSuccess(json)));
  };
}
