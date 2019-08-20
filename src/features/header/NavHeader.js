import React from 'react';
import { Link } from 'react-router-dom';

import routePaths from 'shared/routePaths';

import {
    NavHeaderContainer,
    NavList,
    NavListItem,
} from './headerStyledComponents';

const NavHeader = () => {
    return (
        <NavHeaderContainer>
            <NavList>
                <NavListItem>
                    <Link to={routePaths.HOME}>HOME</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("income_tax")}>INCOME TAX</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("audit")}>AUDIT</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("gst")}>GST</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("vat")}>VAT</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("service_tax")}>SERVICE TAX</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("corporate_law")}>CORPORATE LAW</Link>
                </NavListItem>
                <NavListItem>
                    <Link to={routePaths.POSTS_BY_CATEGORY("accounts")}>ACCOUNTS</Link>
                </NavListItem>
            </NavList>
        </NavHeaderContainer>
    );
};

export default NavHeader;
