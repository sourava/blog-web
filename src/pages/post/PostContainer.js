import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Post from './Post';
import { getPost, addClap } from 'features/posts/postsActions';
import { getComments, addComment } from 'features/comments/commentsActions';
import { paramsSeperator } from 'shared/utils/helper';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    postData: state.postsReducer.post,
    comments: state.commentsReducer.comments,
});

const mapDispatchToProps = dispatch => ({
    getPost: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPost(id, successCallback, errorCallback));
    },
    getComments: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getComments(id, successCallback, errorCallback));
    },
    addComment: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addComment(data, token, successCallback, errorCallback));
    },
    addClap: (
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addClap(params, token, successCallback, errorCallback));
    },
});

class PostContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.postID = paramsSeperator(this.props.location.search)["id"];
    }

    static propTypes = {
        getPost: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired,
        addComment: PropTypes.func.isRequired,
        addClap: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        postData: PropTypes.object.isRequired,
        comments: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
    }
    
    componentDidMount() {
        this.props.getPost(this.postID);
        this.props.getComments(this.postID);
    }

    addComment = (text, successCallback, errorCallback) => {
        const success = () => {
            if (successCallback) {
                successCallback();
            }
            this.props.getComments(this.postID);
        };
        this.props.addComment({ "post_id": this.postID, text }, this.props.loginData.data.token, success, errorCallback);
    };

    addClap = (successCallback) => {
        this.props.addClap({ postID: this.postID, userID: this.props.loginData.data.id }, this.props.loginData.data.token);
        successCallback();
    }

    render () {
        if (this.props.postData.isFulfilled) {
            return (
                <Post
                    postData={this.props.postData}
                    comments={this.props.comments}
                    addComment={this.addComment}
                    addClap={this.addClap}
                    loginData={this.props.loginData}
                />
            );
        } else {
            return null;
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer));
