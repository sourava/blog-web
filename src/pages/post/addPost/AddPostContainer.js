import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AddPost from './AddPost';
import { addImage, addPost } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    addImageData: state.postsReducer.addImage,
    addPostData: state.postsReducer.addPost,
});

const mapDispatchToProps = dispatch => ({
    addImage: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addImage(data, token, successCallback, errorCallback));
    },
    addPost: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addPost(data, token, successCallback, errorCallback));
    },
});

class AddPostContainer extends React.PureComponent {
    static propTypes = {
        addPost: PropTypes.func.isRequired,
        addImage: PropTypes.func.isRequired,
        loginData: PropTypes.object.isRequired,
        addImageData: PropTypes.object.isRequired,
        addPostData: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }

    addPost = (data, successCallback, errorCallback) => {
        this.props.addPost(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    addImage = (data, successCallback, errorCallback) => {
        this.props.addImage(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        const { addImageData, addPostData, loginData, history } = this.props;
        return (
            <AddPost
                addImageData={addImageData}
                addPostData={addPostData}
                addPost={this.addPost}
                addImage={this.addImage}
                role={loginData.data.role}
                history={history}
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPostContainer));
