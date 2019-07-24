import React from 'react';
import PropTypes from 'prop-types';
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
    }

    componentWillMount() {
        this.props.getCategories();
    }

    render () {
        return (
            <AddPost {...this.props} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer);
