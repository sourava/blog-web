import styled from 'styled-components';

const HeaderContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px -2px;
`;

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
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Logo = styled.h1`
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 30px;
    font-weight: 700;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 25px;
    }

    @media (max-width: 575px) {
        font-size: 20px;
    }
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
const MobileMenu = styled.div`
    display: none;
    @media (max-width: 767px) {
        display: flex;
    }
`;

const NavHeaderContainer = styled.nav`
    width: 1140px;
    margin: auto;
    padding: 0 15px 20px 15px;
    
    @media (max-width: 767px) {
        display: none;
    }
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

export {
    HeaderContainer,

    MainHeaderContainer,
    LogoContainer,
    Logo,
    ActionsContainer,
    ActionsList,
    ActionsListItem,
    MobileMenu,

    NavHeaderContainer,
    NavList,
    NavListItem,
};
