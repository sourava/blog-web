import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const propTypes = {
    noHeader: PropTypes.bool,
    noFooter: PropTypes.bool,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    component: PropTypes.func
};

const renderComponent = (noHeader, noFooter, component) => {
    return (
        <React.Fragment>
            {noHeader ? null : <Header />}
            {React.createElement(component)}
            {noFooter ? null : <Footer />}
        </React.Fragment>
    );
};

const AppRoute = ({ noHeader, noFooter, path, component, exact }) => {
    return (
        <Route path={path} exact={exact} component={() => renderComponent(noHeader, noFooter, component)} />
    );
};

AppRoute.propTypes = propTypes;

export default AppRoute;
