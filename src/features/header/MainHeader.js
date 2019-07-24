import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import searchIcon from 'shared/assets/icons/search.png';
import plusIcon from 'shared/assets/icons/plus.png';
import { ImageButton, LinkButton } from 'shared/components/html';
import routePaths from 'shared/routePaths';

import Popover from 'antd/lib/popover';

const MainHeaderContainer = styled.div`
    width: 1140px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;

    @media (max-width: 1140px) {
        width: 100%;
    }
`;
const LogoContainer = styled.div``;
const Logo = styled.h1`
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 30px;
    font-weight: 700;
`;
const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const propTypes = {
    login: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
};

const MainHeader = ({ login, logOut }) => {
    const [popoverVisible, setPopoverVisibility] = useState(false);

    const renderUserActionList = () => {
        return (
            <ul>
                <li><Link to={routePaths.PROFILE(login.data.id)}>Profile</Link></li>
                <li><a onClick={logOut}>Log Out</a></li>
            </ul>
        )
    }

    const renderUserAction = () => {
        if (login && login.data) {
            return (
                <Popover
                    content={renderUserActionList()}
                    trigger="click"
                    placement={window.innerWidth < 1140 ? "bottomRight" : "bottom"}
                    visible={popoverVisible}
                    onVisibleChange={setPopoverVisibility}
                >
                    <ImageButton
                        imageProps={{ src: login.data.avatar, round: true, height: "40px", width: "auto" }}
                        linkButton
                    />
                </Popover>
            );
        } else {
            return (
                <React.Fragment>
                    <LinkButton to={routePaths.LOGIN} text="Login" type="primary" />
                </React.Fragment>

            );
        }
    };
    return (
        <MainHeaderContainer>
            <LogoContainer>
                <Link to={routePaths.HOME}>
                    <Logo>All About Taxes</Logo>
                </Link>
            </LogoContainer>
            <ActionsContainer>
                {login && login.data ? <LinkButton to={routePaths.ADD_POST} imageProps={{ src: plusIcon, height: "22px", width: "auto" }} margin="0 20px 0 0" linkButton /> : null}
                <LinkButton to={routePaths.SEARCH} imageProps={{ src: searchIcon, height: "22px", width: "auto" }} margin="0 20px 0 0" linkButton />
                {renderUserAction()}
            </ActionsContainer>
        </MainHeaderContainer>
    );
};

MainHeader.propTypes = propTypes;

export default MainHeader;
