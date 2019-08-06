import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addImage, updatePost, getPost } from 'features/posts/postsActions';
import { getCategories } from 'features/category/categoryActions';
import { Spinner } from 'shared/components/html';

import EditPost from './EditPost';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    addImageData: state.postsReducer.addImage,
    updatePostData: state.postsReducer.updatePost,
    post: state.postsReducer.post,
    categories: state.categoryReducer.categories,
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
        getPost: PropTypes.func.isRequired,
        addImage: PropTypes.func.isRequired,
        updatePost: PropTypes.func.isRequired,
        categories: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        addImageData: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }

    componentWillMount() {
        const { getCategories, getPost, match } = this.props;
        getCategories();
        getPost(match.params.id);
    }

    updatePost = (data, successCallback, errorCallback) => {
        this.props.updatePost(this.props.match.params.id, data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    addImage = (data, successCallback, errorCallback) => {
        this.props.addImage(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        const { categories, post, addImageData, loginData, history } = this.props;
        if (categories.isFulfilled && post.isFulfilled) {
            return (
                <EditPost
                    categories={categories}
                    addImageData={addImageData}
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
