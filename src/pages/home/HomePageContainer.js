import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from './HomePage';
import { getPosts, getPopularPosts, getTrendingPosts, getFeaturedPosts } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    popularPosts: state.postsReducer.popularPosts,
    trendingPosts: state.postsReducer.trendingPosts,
    featuredPosts: state.postsReducer.featuredPosts,
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

class HomePageContainer extends React.PureComponent {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        getPopularPosts: PropTypes.func.isRequired,
        getTrendingPosts: PropTypes.func.isRequired,
        getFeaturedPosts: PropTypes.func.isRequired,
        posts: PropTypes.object.isRequired,
        popularPosts: PropTypes.object.isRequired,
        trendingPosts: PropTypes.object.isRequired,
        featuredPosts: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getPopularPosts();
        this.props.getTrendingPosts();
        this.props.getFeaturedPosts();
    }

    getPosts = (params, page, successCallback, errorCallback) => {
        this.props.getPosts({ ...params, "page": page }, successCallback, errorCallback);
    }

    render() {
        const { posts, popularPosts, trendingPosts, featuredPosts, loginData } = this.props;
        return (
            <HomePage
                getPosts={this.getPosts}
                posts={posts}
                popularPosts={popularPosts}
                trendingPosts={trendingPosts}
                featuredPosts={featuredPosts}
                loginData={loginData}
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageContainer));
