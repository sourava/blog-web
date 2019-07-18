import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => ({
    login: state.authReducer.login,
});

export default connect(mapStateToProps)(Header);
