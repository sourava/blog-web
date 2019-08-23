import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addImage, updatePost, getPost } from 'features/posts/postsActions';
import { Spinner } from 'shared/components/html';
import { paramsSeperator } from 'shared/utils/helper';

import EditPost from './EditPost';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    addImageData: state.postsReducer.addImage,
    updatePostData: state.postsReducer.updatePost,
    post: state.postsReducer.post,
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
    updatePost: (
        id,
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(updatePost(id, data, token, successCallback, errorCallback));
    },
    getPost: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPost(id, successCallback, errorCallback));
    },
});

class EditPostContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.postID = paramsSeperator(this.props.location.search)["id"];
    }

    static propTypes = {
        getPost: PropTypes.func.isRequired,
        addImage: PropTypes.func.isRequired,
        updatePost: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired,
        addImageData: PropTypes.object.isRequired,
        updatePostData: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getPost(this.postID);
    }

    updatePost = (data, successCallback, errorCallback) => {
        this.props.updatePost(this.postID, data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    addImage = (data, successCallback, errorCallback) => {
        this.props.addImage(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        const { post, addImageData, updatePostData, loginData, history } = this.props;
        if (post.isFulfilled) {
            return (
                <EditPost
                    addImageData={addImageData}
                    updatePostData={updatePostData}
                    addImage={this.addImage}
                    updatePost={this.updatePost}
                    post={post}
                    role={loginData.data.role}
                    history={history}
                />
            );
        } else {
            return <Spinner />;
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostContainer));
