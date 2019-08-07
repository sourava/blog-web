import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Posts from './Posts';
import { getPosts, getPopularPosts } from 'features/posts/postsActions';
import { Spinner } from 'shared/components/html';

const mapStateToProps = state => ({
    popularPosts: state.postsReducer.popularPosts,
    posts: state.postsReducer.posts,
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
});

class PostsContainer extends React.PureComponent {
    static propTypes = {
        getPopularPosts: PropTypes.func.isRequired,
        getPosts: PropTypes.func.isRequired,

        popularPosts: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getPopularPosts({ "category": this.props.match.params.category });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category != prevProps.match.params.category) {
            this.props.getPopularPosts({ "category": this.props.match.params.category });
        }
    }

    getPosts = (params, page, successCallback, errorCallback) => {
        this.props.getPosts({ ...params, "category": this.props.match.params.category, "page": page }, successCallback, errorCallback);
    }

    render() {
        const { popularPosts, posts, match, loginData } = this.props;
        if (popularPosts.isFulfilled) {
            return (
                <Posts
                    getPosts={this.getPosts}
                    popularPosts={popularPosts}
                    posts={posts}
                    match={match}
                    loginData={loginData}
                />
            );
        }
        return (
            <Spinner />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
