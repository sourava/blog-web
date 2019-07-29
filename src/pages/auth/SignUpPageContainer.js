import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUpPage from './SignUpPage';
import { facebookSignUp, googleSignUp } from 'features/auth/authActions';

const mapStateToProps = state => ({
    signupData: state.authReducer.signup,
});

const mapDispatchToProps = dispatch => ({
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
