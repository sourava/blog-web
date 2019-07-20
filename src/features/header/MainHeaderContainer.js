import { connect } from 'react-redux';

import MainHeader from './MainHeader';

import { logOutAction } from 'features/auth/authActions';

const mapStateToProps = state => ({
    login: state.authReducer.login,
});

const mapDispatchToProps = dispatch => ({
    logOut: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(logOutAction(params, successCallback, errorCallback));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
