import { connect } from 'react-redux';

import SearchPage from './SearchPage';
import { searchPost } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    searchData: state.postsReducer.search,
});

const mapDispatchToProps = dispatch => ({
    searchPost: (
        query,
        successCallback,
        errorCallback,
    ) => {
        dispatch(searchPost(query, successCallback, errorCallback));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
