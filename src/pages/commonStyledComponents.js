import styled from 'styled-components';

const PageContainer = styled.div`
    width: 1140px;
    margin: auto;

    @media (max-width: 1140px) {
        width: 100%;
    }

    @media (max-width: 1199px) {
        width: 930px;
    }

    @media (max-width: 991px) {
        width: 690px;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

const SectionContainer = styled.div`
    display: flex;
    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
`;

const PageLeftContainer = styled.div`
    width: 67%;
    padding: 0 15px;
    @media (max-width: 767px) {
        width: 510px;
        margin: auto;
        padding: 0;
    }
    @media (max-width: 575px) {
        width: 100%;
        padding: 0 15px;
    }
`;
const PageRightContainer = styled.div`
    width: 33%;
    padding: 0 15px 0 30px;
    @media (max-width: 767px) {
        width: 510px;
        margin: auto;
        padding: 0;
    }
    @media (max-width: 575px) {
        width: 100%;
        padding: 0 15px;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;
const ListItem = styled.li`
    display: flex;
    margin-bottom: 15px;
`;
const PostCount = styled.div`
    display: block;
    font-size: 28px;
    color: rgba(0, 0, 0, 0.15);
    line-height: 35px;
    margin-right: 15px;
`;

const Info = styled.div`
    padding: 0 15px;
`;

const TabContainer = styled.div`
`;

export {
    PageContainer,
    SectionContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
    Info,
    TabContainer,
};