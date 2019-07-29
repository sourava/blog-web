import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : ""};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    flex-direction: ${props => props.column ? "column" : "row"};
    background: ${props => props.background || ""};
    margin: ${props => props.margin || ""};
    max-width: ${props => props.maxWidth || ""};
    padding: ${props => props.padding || ""};
    align-items: ${props => props.alignItems || ""};
    width: 100%;
`;

const Title = styled.h5`
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical;
    --x-height-multiplier: 0.342 !important;
    --baseline-multiplier: 0.22 !important;
    transform: translateY(0.96px);
    letter-spacing: -.17px !important;
    font-size: ${props => props.type === "big" ? "22px" : "17px"};
    font-weight: bold;
    margin-bottom: 14px;
`;

const Description = styled.p`
    color: rgba(0, 0, 0, 0.64);
    font-size: 16px;
    letter-spacing: 0.5px;
`;

const AuthorName = styled.span`
    color: rgba(0, 0, 0, 0.84);
    font-size: 12px;
`;

const DatePosted = styled.span`
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
    line-height: 0.8;
`;

export {
    FlexContainer,
    Title,
    Description,
    AuthorName,
    DatePosted
};
