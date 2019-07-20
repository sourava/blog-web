import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainHeader from './MainHeaderContainer';
import NavHeader from './NavHeader';

const HeaderContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px -2px;
`;

const propTypes = {
    noNavHeader: PropTypes.bool
};

const Header = ({ noNavHeader }) => {
    return (
        <HeaderContainer>
            <MainHeader />
            {noNavHeader ? null : <NavHeader />}
        </HeaderContainer>
    );
};

Header.propTypes = propTypes;

export default Header;
