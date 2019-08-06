import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AddPost from './AddPost';
import { addImage, addPost } from 'features/posts/postsActions';
import { getCategories } from 'features/category/categoryActions';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
    addImageData: state.postsReducer.addImage,
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
    addPost: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(addPost(data, token, successCallback, errorCallback));
    },
    getCategories: (
        successCallback,
        errorCallback,
    ) => {
        dispatch(getCategories(successCallback, errorCallback));
    },
});

class AddPostContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        getCategories: PropTypes.func.isRequired,
        addPost: PropTypes.func.isRequired,
        addImage: PropTypes.func.isRequired,
        loginData: PropTypes.object.isRequired,
        categories: PropTypes.object.isRequired,
        addImageData: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getCategories();
    }

    addPost = (data, successCallback, errorCallback) => {
        this.props.addPost(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    addImage = (data, successCallback, errorCallback) => {
        this.props.addImage(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        const { categories, addImageData, loginData } = this.props;
        return (
            <AddPost
                categories={categories}
                addImageData={addImageData}
                addPost={this.addPost}
                addImage={this.addImage}
                role={loginData.data.role}
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPostContainer));
