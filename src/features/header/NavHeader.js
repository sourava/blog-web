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
