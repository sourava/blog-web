import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    display: ${props => props.display || "block"};
    font-size: ${props => props.fontSize || "18px"};
    width: ${props => props.block ? "100%" : "auto"};
    background: ${props => props.background || "#FFFFFF"};
    color: ${props => props.color || "#000000"};
    margin: ${props => props.margin || 0};
    align-items: center;
    padding: 10px 20px;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
`;
const Text = styled.span`
    color: #000000;
    font-size: 14px;
    margin-left: 20px;
`;

const propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
};

const ImageButton = ({ image, text, ...restProps }) => {
    return (
        <Button display="flex" {...restProps}>
            <Icon src={image}></Icon>
            <Text>{text}</Text>
        </Button>
    );
};

ImageButton.propTypes = propTypes;

export {
    Button,
    ImageButton
};
