import { connect } from 'react-redux';

import SetPassword from './SetPassword';
import { facebookSignUp, googleSignUp, resetTokenAction } from 'features/auth/authActions';

const mapStateToProps = state => ({
    socialToken: state.authReducer.socialToken,
});

const mapDispatchToProps = dispatch => ({
    resetTokenAction: () => dispatch(resetTokenAction()),
    facebookSignUp: (
        params,
        errorCallback,
    ) => {
        dispatch(facebookSignUp(params, resetTokenAction, errorCallback));
    },
    googleSignUp: (
        params,
        errorCallback,
    ) => {
        dispatch(googleSignUp(params, resetTokenAction, errorCallback));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetPassword);
 