import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUpPage from './SignUpPage';
import { setTokenAction } from 'features/auth/authActions';

const mapStateToProps = state => ({
    signupData: state.authReducer.signup,
});

const mapDispatchToProps = dispatch => ({
    setTokenAction: (payload) => dispatch(setTokenAction(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPage));
