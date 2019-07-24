import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Posts from './Posts';
import { getPosts, getPopularPosts } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    popularPosts: state.postsReducer.popularPosts,
});

const mapDispatchToProps = dispatch => ({
    getPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPosts(params, successCallback, errorCallback));
    },
    getPopularPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPopularPosts(params, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
