import { connect } from 'react-redux';

import Post from './Post';
import { getPost } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    postData: state.postsReducer.post,
});

const mapDispatchToProps = dispatch => ({
    getPost: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPost(id, successCallback, errorCallback));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
