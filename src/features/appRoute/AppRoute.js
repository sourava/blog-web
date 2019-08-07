import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import Header from 'features/header/Header';
import Footer from 'features/Footer';
import routePaths from 'shared/routePaths';

const ContentContainer = styled.div`
    padding-top: ${props => props.noHeader ? "0" : "30px"};
`;

const propTypes = {
    noHeader: PropTypes.bool,
    noFooter: PropTypes.bool,
    noNavHeader: PropTypes.bool,
    isPrivate: PropTypes.bool,
    loginData: PropTypes.object.isRequired,

    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    component: PropTypes.any
};

const defaultProps = {
    isPrivate: false,
    exact: false,
};

const renderComponent = (noHeader, noFooter, noNavHeader, component, isPrivate, loginData) => {
    if (isPrivate && loginData.data && loginData.data.token || !isPrivate) {
        return (
            <div id="page">
                {noHeader ? null : <Header noNavHeader={noNavHeader} />}
                <ContentContainer noHeader={noHeader}>
                    {React.createElement(component)}
                </ContentContainer>
                {noFooter ? null : <Footer />}
            </div>
        );
    }
    return <Redirect to={routePaths.LOGIN} />;
};

const AppRoute = ({ noHeader, noFooter, noNavHeader, path, component, exact, loginData, isPrivate }) => {
    return <Route path={path} exact={exact} component={() => renderComponent(noHeader, noFooter, noNavHeader, component, isPrivate, loginData)} />;
};

AppRoute.propTypes = propTypes;
AppRoute.defaultProps = defaultProps;

export default AppRoute;
