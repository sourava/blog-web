import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from './HomePage';
import { getCategories } from 'features/category/categoryActions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    getCategories: (
        successCallback,
        errorCallback,
    ) => {
        dispatch(getCategories(successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
