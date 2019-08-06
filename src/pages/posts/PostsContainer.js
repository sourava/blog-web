import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Posts from './Posts';
import { getPopularPosts } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    popularPosts: state.postsReducer.popularPosts,
});

const mapDispatchToProps = dispatch => ({
    getPopularPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPopularPosts(params, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
