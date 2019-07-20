import { connect } from 'react-redux';

import AddPost from './AddPost';
import { addImage, addPost } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    addImageData: state.postsReducer.addImage,
});

const mapDispatchToProps = dispatch => ({
    addImageAction: (
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addImage(params, token, successCallback, errorCallback));
    },
    addPostAction: (
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addPost(params, token, successCallback, errorCallback));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
