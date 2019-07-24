import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routePaths from 'shared/routePaths';

const NavHeaderContainer = styled.nav`
    width: 1140px;
    margin: auto;
    padding: 0 15px 20px 15px; 
`;
const NavList = styled.ul`
    display: flex;
    width: 100%;
    list-style: none;
    margin: 0;
`;
const NavListItem = styled.li`
    font-size: 14px;
    font-weight: 400;
    margin-right: 20px;
`;

const NavHeader = () => {
    return (
        <NavHeaderContainer>
            <NavList>
                <NavListItem>
                    <Link to={routePaths.HOME}>HOME</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/income_tax`}>INCOME TAX</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/audit`}>AUDIT</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/gst`}>GST</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/vat`}>VAT</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/service_tax`}>SERVICE TAX</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/corporate_law`}>CORPORATE LAW</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={`${routePaths.POSTS}/accounts`}>ACCOUNTS</Link>
                </NavListItem>
            </NavList>
        </NavHeaderContainer>
    );
};

export default NavHeader;
