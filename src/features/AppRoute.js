import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './Footer';

const ContentContainer = styled.div`
    padding-top: ${props => props.noHeader ? "0" : "30px"};
`;

const propTypes = {
    noHeader: PropTypes.bool,
    noFooter: PropTypes.bool,
    noNavHeader: PropTypes.bool,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    component: PropTypes.any
};

const renderComponent = (noHeader, noFooter, noNavHeader, component) => {
    return (
        <React.Fragment>
            {noHeader ? null : <Header noNavHeader={noNavHeader} />}
            <ContentContainer noHeader={noHeader}>
                {React.createElement(component)}
            </ContentContainer>
            {noFooter ? null : <Footer />}
        </React.Fragment>
    );
};

const AppRoute = ({ noHeader, noFooter, noNavHeader, path, component, exact }) => {
    return (
        <Route path={path} exact={exact} component={() => renderComponent(noHeader, noFooter, noNavHeader, component)} />
    );
};

AppRoute.propTypes = propTypes;

export default AppRoute;
