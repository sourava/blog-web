import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ApprovalPage from './ApprovalPage';
import { getPostsByStatus, bulkUpdatePostStatus, bulkUpdatePostFeatured } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.postsByStatus,
    loginData: state.authReducer.login,
});

const mapDispatchToProps = dispatch => ({
    getPosts: (
        params,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPostsByStatus(params, token, successCallback, errorCallback));
    },
    bulkUpdatePostStatus: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(bulkUpdatePostStatus(data, token, successCallback, errorCallback));
    },
    bulkUpdatePostFeatured: (
        data,
        token,
        successCallback,
        errorCallback,
    ) => {
        dispatch(bulkUpdatePostFeatured(data, token, successCallback, errorCallback));
    },
});

class ApprovalPageContainer extends React.PureComponent {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        bulkUpdatePostStatus: PropTypes.func.isRequired,
        bulkUpdatePostFeatured: PropTypes.func.isRequired,
        posts: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
    };

    bulkUpdatePostStatus = (data, successCallback, errorCallback) => {
        this.props.bulkUpdatePostStatus(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    bulkUpdatePostFeatured = (data, successCallback, errorCallback) => {
        this.props.bulkUpdatePostFeatured(data, this.props.loginData.data.token, successCallback, errorCallback);
    }

    getPosts = (params, successCallback, errorCallback) => {
        this.props.getPosts(params, this.props.loginData.data.token, successCallback, errorCallback);
    }

    render() {
        return (
            <ApprovalPage
                getPosts={this.getPosts}
                posts={this.props.posts}
                bulkUpdatePostStatus={this.bulkUpdatePostStatus}
                bulkUpdatePostFeatured={this.bulkUpdatePostFeatured}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovalPageContainer);
