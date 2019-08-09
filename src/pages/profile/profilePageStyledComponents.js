import styled from 'styled-components';
import { Button, Input } from 'shared/components/html';

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
    margin: 0;
`;
const AuthorBio = styled.p``;
const AuthorDetails = styled.div``;

const AuthorActions = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const EditProfileButton = styled(Button).attrs({
    margin: "0 0 0 50px"
})``;
const Label = styled.span``;
const Error = styled.span`
    color: red;
`;
const InputField = styled(Input).attrs({
    margin: "0 0 20px"
})``;

export {
    AuthorContainer,
    AuthorImageContainer,
    AuthorDetails,
    AuthorName,
    AuthorBio,
    AuthorActions,
    EditProfileButton,
    Label,
    Error,
    InputField,
};