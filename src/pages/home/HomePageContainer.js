import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from './HomePage';
import { getPosts, getPopularPosts, getTrendingPosts, getFeaturedPosts } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    popularPosts: state.postsReducer.popularPosts,
    trendingPosts: state.postsReducer.trendingPosts,
    featuredPosts: state.postsReducer.featuredPosts,
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
    getTrendingPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getTrendingPosts(params, successCallback, errorCallback));
    },
    getFeaturedPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getFeaturedPosts(params, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
