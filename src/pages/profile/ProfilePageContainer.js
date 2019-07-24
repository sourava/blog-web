import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { getPosts, getPopularPosts } from 'features/posts/postsActions';
import { getAuthor } from 'features/author/authorActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    author: state.authorReducer.author,
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
    getAuthor: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getAuthor(id, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
