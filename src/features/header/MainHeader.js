import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Popover from 'antd/lib/popover';

import searchIcon from 'shared/assets/icons/search.png';
import plusIcon from 'shared/assets/icons/plus.png';
import userIcon from 'shared/assets/icons/user.png';
import menuIcon from 'shared/assets/icons/menu.png';
import { ImageButton, LinkButton } from 'shared/components/html';
import routePaths from 'shared/routePaths';

import {
    MainHeaderContainer,
    LogoContainer,
    Logo,
    ActionsContainer,
    ActionsList,
    ActionsListItem,
    MobileMenu,
} from './headerStyledComponents';


const propTypes = {
    login: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
};

const MainHeader = ({ login, logOut }) => {
    const [popoverVisible, setPopoverVisibility] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisibility] = useState(false);

    const renderUserActionList = () => {
        return (
            <ActionsList>
                {login.data.role === "admin" ? <ActionsListItem><Link to={routePaths.APPROVAL}>Approval</Link></ActionsListItem> : null}
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

    const renderMenuList = () => {
        return (
            <ActionsList>
                <ActionsListItem>
                    <Link to={routePaths.HOME}>HOME</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/income_tax`}>INCOME TAX</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/audit`}>AUDIT</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/gst`}>GST</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/vat`}>VAT</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/service_tax`}>SERVICE TAX</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/corporate_law`}>CORPORATE LAW</Link>
                </ActionsListItem>
                <ActionsListItem>
                    <Link to={`${routePaths.POSTS}/accounts`}>ACCOUNTS</Link>
                </ActionsListItem>
            </ActionsList>
        );
    };

    const renderMobileMenu = () => {
        return (
            <MobileMenu>
                <Popover
                    content={renderMenuList()}
                    trigger="click"
                    placement={window.innerWidth < 1140 ? "bottomRight" : "bottom"}
                    visible={mobileMenuVisible}
                    onVisibleChange={setMobileMenuVisibility}
                >
                    <ImageButton
                        imageProps={{ src: menuIcon, height: "22px", width: "auto" }}
                        border="none"
                        padding="0"
                        margin="0 0 0 20px"
                    />
                </Popover>
            </MobileMenu>
        );
    };

    return (
        <MainHeaderContainer>
            <LogoContainer>
                <Link to={routePaths.HOME}>
                    <Logo>All About Taxes</Logo>
                </Link>
            </LogoContainer>
            <ActionsContainer>
                {login && login.data ? <LinkButton border="none" padding="0" to={routePaths.ADD_POST} imageProps={{ src: plusIcon, height: "22px", width: "auto" }} margin="0 20px 0 0" /> : null}
                <LinkButton border="none" padding="0" to={routePaths.SEARCH} imageProps={{ src: searchIcon, height: "22px", width: "auto" }} margin="0 20px 0 0" />
                {renderUserAction()}
                {renderMobileMenu()}
            </ActionsContainer>
        </MainHeaderContainer>
    );
};

MainHeader.propTypes = propTypes;

export default MainHeader;
