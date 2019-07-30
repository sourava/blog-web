import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EditPost from './EditPost';
import { addImage, updatePost, getPost } from 'features/posts/postsActions';
import { getCategories } from 'features/category/categoryActions';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    addImageData: state.postsReducer.addImage,
    updatePostData: state.postsReducer.updatePost,
    post: state.postsReducer.post,
    categories: state.categoryReducer.categories,
});

const mapDispatchToProps = dispatch => ({
    addImage: (
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addImage(params, token, successCallback, errorCallback));
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
    getPost: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPost(id, successCallback, errorCallback));
    },
    getCategories: (
        successCallback,
        errorCallback,
    ) => {
        dispatch(getCategories(successCallback, errorCallback));
    },
});

class EditPostContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        getCategories: PropTypes.func.isRequired,
        categories: PropTypes.object.isRequired,
        getPost: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getCategories();
        this.props.getPost(this.props.match.params.id);
    }

    render () {
        if (this.props.categories.isFulfilled && this.props.post.isFulfilled) {
            return (
                <EditPost {...this.props} />
            );
        } else {
            return null;
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostContainer));
