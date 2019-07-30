import styled from 'styled-components';

const Icon = styled.img`
    margin: ${props => props.margin || "0"};
    border-radius: ${props => props.round ? '100%' : '0'};
    max-width: ${props => props.maxWidth || ""};
    padding: ${props => props.padding || ""};
    object-fit: ${props => props.objectFit || ""};
    padding: ${props => props.padding || ""};
`;

export default Icon;
