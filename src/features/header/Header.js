import React from 'react';
import PropTypes from 'prop-types';

import MainHeader from './MainHeaderContainer';
import NavHeader from './NavHeader';
import {
    HeaderContainer
} from './headerStyledComponents';

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
