import React from 'react';
import styled from 'styled-components';

import { Divider } from 'shared/components/html';

const FooterContainer = styled.div`
    width: 1140px;
    margin: auto;
    padding: 20px 15px;

    @media (max-width: 1140px) {
        width: 100%;
    }
`;

const Copyright = styled.div`
    font-size: 14px;
    font-weight: 400;
`;

const MadeBy = styled.a`
    color: #03a87c
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Divider />
            <Copyright>
                <p>Copyright 2019 All About Taxes. Made by <MadeBy href="#">Sourav Agarwal</MadeBy></p>
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
