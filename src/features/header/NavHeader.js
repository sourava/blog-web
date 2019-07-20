import React from 'react';
import styled from 'styled-components';

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
                <NavListItem>HOME</NavListItem>
                <NavListItem>INCOME TAX</NavListItem>
                <NavListItem>AUDIT</NavListItem>
                <NavListItem>GST</NavListItem>
                <NavListItem>VAT</NavListItem>
                <NavListItem>SERVICE TAX</NavListItem>
                <NavListItem>CORPORATE LAW</NavListItem>
                <NavListItem>ACCOUNTS</NavListItem>
            </NavList>
        </NavHeaderContainer>
    );
};

export default NavHeader;
