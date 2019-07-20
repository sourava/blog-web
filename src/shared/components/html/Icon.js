import styled from 'styled-components';

const Icon = styled.img`
    margin: ${props => props.margin || "0"};
    border-radius: ${props => props.round ? '100%' : '0'};
`;

export default Icon;
