import styled from 'styled-components';

const FeaturedPageLeftContainer = styled.div`
    width: 75%;
    padding: 0 15px;
    @media (max-width: 767px) {
        width: 510px;
        margin: 30px auto 0;
        padding: 0;
    }
    @media (max-width: 575px) {
        margin-top: 30px;
        width: 100%;
        padding: 0 15px;
    }
`;
const FeaturedPageRightContainer = styled.div`
    width: 25%;
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

const EditorsPickContainer = styled.div`
    display: flex;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;
const EditorsArticleLeftContainer = styled.div`
    width: 50%;
    padding: 0 15px 0 0;
    @media (max-width: 767px) {
        width: 100%;
        padding: 0;
    }
`;
const EditorsArticleRightContainer = styled.div`
    width: 50%;
    padding: 0 0 0 15px;
    @media (max-width: 767px) {
        width: 100%;
        padding: 0;
    }
`;


export {
    FeaturedPageLeftContainer,
    FeaturedPageRightContainer,
    EditorsPickContainer,
    EditorsArticleLeftContainer,
    EditorsArticleRightContainer,
};