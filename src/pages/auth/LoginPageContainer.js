import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginPage from './LoginPage';
import { facebookLogin, googleLogin } from 'features/auth/authActions';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
});

const mapDispatchToProps = dispatch => ({
    facebookLogin: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(facebookLogin(params, successCallback, errorCallback));
    },
    googleLogin: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(googleLogin(params, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
