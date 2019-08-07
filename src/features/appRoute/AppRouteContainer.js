import { connect } from 'react-redux';

import AppRoute from './AppRoute';

const mapStateToProps = state => ({
    loginData: state.authReducer.login,
});

export default connect(mapStateToProps)(AppRoute);
