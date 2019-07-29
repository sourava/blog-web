import { connect } from 'react-redux';

import Post from './Post';
import { getPost, addClap } from 'features/posts/postsActions';
import { getComments, addComment } from 'features/comments/commentsActions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
