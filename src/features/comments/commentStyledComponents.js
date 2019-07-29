import styled from 'styled-components';

const CommentContainer = styled.div`
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    margin: 20px 0 0;
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

const CommentContent = styled.p`
    margin: 20px 0 0;
    color: rgba(0, 0, 0, 0.74);
`;

export {
    CommentContainer,
    AuthorContainer,
    PostMetaDataContainer,
    AuthorName,
    DatePosted,
    CommentContent,
};
