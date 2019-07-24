import styled from 'styled-components';

const PageContainer = styled.div`
    width: 1140px;
    margin: auto;
    display: flex;
    flex-direction: row;

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
        flex-direction: column;
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
const AuthorContainer = styled.div`
    display: flex;
    overflow: hidden;
    padding: 50px;
    margin-bottom: 30px;
`;
const AuthorImageContainer = styled.div`
    box-sizing: border-box;
    display: block;
    height: 106px;
    margin-right: 30px;
    position: relative;
    width: 106px;

    img {
        box-sizing: border-box;
        display: inline;
        height: 106px;
        max-width: 120px;
        width: 106px;
    }
`;
const AuthorName = styled.h5`
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0px 0 10px;
    display: block;
    margin: 0;
`;
const AuthorBio = styled.p``;
const AuthorDetails = styled.div``;

export {
    PageContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
    AuthorContainer,
    AuthorImageContainer,
    AuthorDetails,
    AuthorName,
    AuthorBio,
};