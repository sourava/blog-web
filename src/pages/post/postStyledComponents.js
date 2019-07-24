import styled from 'styled-components';

const PageContainer = styled.div`
    width: 1140px;
    margin: auto;
    padding: 0 15px;
`;
const PostHeader = styled.div`
    margin: 0 150px 40px;
`;
const PostTitle = styled.h1`
    font-family: Lora, serif;
    margin-bottom: 30px;
`;

const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AuthorContainer = styled.div`
    display: flex;
`;
const PostMetaDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
`;
const AuthorName = styled.span`
    color: rgba(0, 0, 0, 0.84);
`;
const DatePosted = styled.span`
    color: rgba(0, 0, 0, 0.54);
`;

const PostContent = styled.div`
`;

const PostShare = styled.div`
    display: flex;
`;

export {
    PageContainer,
    PostHeader,
    PostTitle,
    ActionsContainer,
    AuthorContainer,
    PostMetaDataContainer,
    AuthorName,
    DatePosted,
    PostContent,
    PostShare
};
