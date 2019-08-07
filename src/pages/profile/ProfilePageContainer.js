import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { getPosts, getPopularPosts, deletePost, updatePost } from 'features/posts/postsActions';
import { getAuthor } from 'features/author/authorActions';
import { Spinner } from 'shared/components/html';

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

class ProfilePageContainer extends React.PureComponent {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        getPopularPosts: PropTypes.func.isRequired,
        getAuthor: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        updatePost: PropTypes.func.isRequired,
    
        popularPosts: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        const { getPopularPosts, getAuthor, match } = this.props;
        getPopularPosts({ "author": match.params.id });
        getAuthor(match.params.id);
    }

    getPostsByStatusAndPage = (params, page, successCallback, errorCallback) => {
        this.props.getPosts({ ...params, "author": this.props.match.params.id, "page": page }, successCallback, errorCallback);
    }

    deletePost = (id, successCallback, errorCallback) => {
        this.props.deletePost(id, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        const { popularPosts, author, loginData, updatePost, posts } = this.props;
        if (popularPosts.isFulfilled && author.isFulfilled) {
            return (
                <ProfilePage
                    getPostsByStatusAndPage={this.getPostsByStatusAndPage}
                    deletePost={this.deletePost}
                    loginData={loginData}
                    author={author}
                    popularPosts={popularPosts}
                    updatePost={updatePost}
                    posts={posts}
                />
            );
        }
        return (
            <Spinner />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer));
