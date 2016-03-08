import React, { PropTypes, Component } from 'react';

export default class PostsList extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        )}
      </ul>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};
