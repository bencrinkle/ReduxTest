import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsListActions';
import PostsList from '../components/PostsList';

class PostsListContainer extends Component {
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(getPosts());
	}
	render(){
		return(
			<div>
				<PostsList posts={this.props.posts}/>
			</div>);
	}
}

PostsListContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps)(PostsListContainer);
