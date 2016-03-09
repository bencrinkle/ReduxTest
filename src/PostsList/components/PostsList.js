import React, { PropTypes, Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class PostsList extends Component {
  render() {
    return (
      <Panel>
        <p>A simple async call to populate a list of posts. This demonstrates async calls within redux</p>
          {this.props.posts.map((post, i) =>
            <Panel key={i} header={post.title}>
              {post.body}
            </Panel>
          )}
      </Panel>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};
