import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostsBySubCategory from './PostsBySubCategory';
import { getPosts } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
    getPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPosts(params, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsBySubCategory));
