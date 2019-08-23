import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUpPage from './SignUpPage';
import { customSignUp, facebookSignUp, googleSignUp } from 'features/auth/authActions';

const mapStateToProps = state => ({
    signupData: state.authReducer.signup,
});

const mapDispatchToProps = dispatch => ({
    customSignUp: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(customSignUp(params, successCallback, errorCallback));
    },
    facebookSignUp: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(facebookSignUp(params, successCallback, errorCallback));
    },
    googleSignUp: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(googleSignUp(params, successCallback, errorCallback));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPage));
