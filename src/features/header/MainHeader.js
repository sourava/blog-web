import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import searchIcon from 'shared/assets/icons/search.png';
import plusIcon from 'shared/assets/icons/plus.png';
import userIcon from 'shared/assets/icons/user.png';
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
const ActionsList = styled.ul`
    list-style: none;
    margin: 0;
`;
const ActionsListItem = styled.li`
    padding: 5px 0;
`;

const propTypes = {
    login: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
};

const MainHeader = ({ login, logOut }) => {
    const [popoverVisible, setPopoverVisibility] = useState(false);

    const renderUserActionList = () => {
        return (
            <ActionsList>
                <ActionsListItem><Link to={routePaths.PROFILE(login.data.id)}>Profile</Link></ActionsListItem>
                <ActionsListItem><a onClick={logOut}>Log Out</a></ActionsListItem>
            </ActionsList>
        );
    };

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
                        imageProps={{ src: login.data.avatar || userIcon, round: true, height: "40px", width: "auto" }}
                        border="none"
                        padding="0"
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
                {login && login.data ? <LinkButton border="none" padding="0" to={routePaths.ADD_POST} imageProps={{ src: plusIcon, height: "22px", width: "auto" }} margin="0 20px 0 0" linkButton /> : null}
                <LinkButton border="none" padding="0" to={routePaths.SEARCH} imageProps={{ src: searchIcon, height: "22px", width: "auto" }} margin="0 20px 0 0" linkButton />
                {renderUserAction()}
            </ActionsContainer>
        </MainHeaderContainer>
    );
};

MainHeader.propTypes = propTypes;

export default MainHeader;
