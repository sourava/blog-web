import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : ""};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    flex-direction: ${props => props.flexDirection || "row"};
    background: ${props => props.background || ""};
    margin: ${props => props.margin || ""};
    max-width: ${props => props.maxWidth || ""};
    padding: ${props => props.padding || ""};
    align-items: ${props => props.alignItems || ""};
    justify-content: ${props => props.justifyContent || ""};
    width: ${props => props.width || "100%"};
`;

export default FlexContainer;
