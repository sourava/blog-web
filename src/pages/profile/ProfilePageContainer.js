import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { getAuthorPosts, getAuthorTrendingPosts, getUserPosts, deletePost } from 'features/posts/postsActions';
import { getAuthor } from 'features/author/authorActions';
import { updateUser } from 'features/user/userActions';
import { Spinner } from 'shared/components/html';

const mapStateToProps = state => ({
    authorPosts: state.postsReducer.authorPosts,
    authorTrendingPosts: state.postsReducer.authorTrendingPosts,
    userPosts: state.postsReducer.userPosts,
    updateUserData: state.userReducer.updateUser,
    author: state.authorReducer.author,
    loginData: state.authReducer.login,
});

const mapDispatchToProps = dispatch => ({
    getAuthorPosts: (
        authorID,
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getAuthorPosts(authorID, params, successCallback, errorCallback));
    },
    getAuthorTrendingPosts: (
        authorID,
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getAuthorTrendingPosts(authorID, params, successCallback, errorCallback));
    },
    getUserPosts: (
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getUserPosts(params, token, successCallback, errorCallback));
    },
    deletePost: (
        id,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(deletePost(id, token, successCallback, errorCallback));
    },
    getAuthor: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getAuthor(id, successCallback, errorCallback));
    },
    updateUser: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(updateUser(data, token, successCallback, errorCallback));
    },
});

class ProfilePageContainer extends React.PureComponent {
    static propTypes = {
        getAuthorPosts: PropTypes.func.isRequired,
        getAuthorTrendingPosts: PropTypes.func.isRequired,
        getUserPosts: PropTypes.func.isRequired,
        getAuthor: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
    
        author: PropTypes.object.isRequired,
        authorPosts: PropTypes.object.isRequired,
        authorTrendingPosts: PropTypes.object.isRequired,
        userPosts: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const { getAuthorTrendingPosts, getAuthor, match } = this.props;
        getAuthorTrendingPosts(match.params.id, { "type": "trending", "page": 1 });
        getAuthor(match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const { getAuthorTrendingPosts, getAuthor, match } = this.props;
            getAuthorTrendingPosts(match.params.id, { "type": "trending", "page": 1 });
            getAuthor(match.params.id);
        }
    }

    getAuthorPosts = (params, page, successCallback, errorCallback) => {
        this.props.getAuthorPosts(this.props.match.params.id, { ...params, "page": page }, successCallback, errorCallback);
    }

    getUserPosts = (params, page, successCallback, errorCallback) => {
        this.props.getUserPosts({ ...params, "page": page }, this.props.loginData.data.token, successCallback, errorCallback);
    }

    deletePost = (id, successCallback, errorCallback) => {
        this.props.deletePost(id, this.props.loginData.data.token, successCallback, errorCallback);
    }

    updateUser = (data, successCallback, errorCallback) => {
        this.props.updateUser(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        const { author, loginData, authorPosts, authorTrendingPosts, userPosts, match } = this.props;
        if (authorTrendingPosts.data && author.data) {
            return (
                <ProfilePage
                    getAuthorPosts={this.getAuthorPosts}
                    getUserPosts={this.getUserPosts}
                    deletePost={this.deletePost}
                    updateUser={this.updateUser}
                    authorPosts={authorPosts}
                    authorTrendingPosts={authorTrendingPosts}
                    userPosts={userPosts}
                    loginData={loginData}
                    author={author}
                    match={match}
                />
            );
        }
        return (
            <Spinner />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer));
