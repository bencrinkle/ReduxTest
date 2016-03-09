import React, { PropTypes, Component } from 'react';

export default class PostsList extends Component {
  render() {
    return (
      <div>
        <p>A simple async call to populate a list of posts. This demonstrates async calls within redux</p>
        <ul>
          {this.props.posts.map((post, i) =>
            <li key={i}>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};
