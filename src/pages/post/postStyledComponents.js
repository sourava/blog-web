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
    margin: 0 150px 40px;
`;

const PostShare = styled.div`
    display: flex;
`;
const PostClaps = styled.div`
    display: flex;
    align-items: center;
`;
const ClapDetails = styled.span`
    margin-left: 20px;
`;

const CommentsContainer = styled.div`
    margin: 0 150px 40px;
`;

const CommentHeading = styled.span``;

const PostActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 30px 0;
    margin: 0 150px 40px;
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
    PostShare,
    PostClaps,
    ClapDetails,
    CommentsContainer,
    CommentHeading,
    PostActions
};
