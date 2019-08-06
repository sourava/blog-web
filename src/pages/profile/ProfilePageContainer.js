import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { getPosts, getPopularPosts, deletePost, updatePost } from 'features/posts/postsActions';
import { getAuthor } from 'features/author/authorActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    author: state.authorReducer.author,
    popularPosts: state.postsReducer.popularPosts,
    loginData: state.authReducer.login,
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
    deletePost: (
        id,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(deletePost(id, token, successCallback, errorCallback));
    },
    updatePost: (
        id,
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(updatePost(id, params, token, successCallback, errorCallback));
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
