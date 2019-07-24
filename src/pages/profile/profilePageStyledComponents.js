import styled from 'styled-components';

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
    AuthorContainer,
    AuthorImageContainer,
    AuthorDetails,
    AuthorName,
    AuthorBio,
};