import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const getColors = (type) => {
    if (type === "primary") {
        return {
            background: "#1890ff",
            color: "#FFFFFF",
            border: "1px solid #1890ff",
            hoverBackground: "#40a9ff",
            hoverColor: "#FFFFFF",
            hoverBorder: "1px solid rgb(64, 169, 255)"
        };
    } else {
        return {
            background: "#FFFFFF",
            color: "rgba(0,0,0,0.65)",
            border: "1px solid rgb(217, 217, 217)",
            hoverBackground: "#FFFFFF",
            hoverColor: "rgb(64, 169, 255)",
            hoverBorder: "1px solid rgb(64, 169, 255)"
        };
    }
};

const getSize = (size) => {
    if (size === "large") {
        return {
            fontSize: '18px',
            margin: '0',
            padding: '8px 25px',
        };
    } else {
        return {
            fontSize: '14px',
            margin: '0',
            padding: '5px 15px',
        };
    }
};

const Button = styled.button`
    display: ${props => props.display || "block"};
    font-size: ${props => getSize(props.size)["fontSize"]};
    width: ${props => props.block ? "100%" : props.width || "auto"};
    height: ${props => props.height || "auto"};
    background: ${props => getColors(props.type)["background"]};
    color: ${props => getColors(props.type)["color"]};
    margin: ${props => props.margin || 0};
    align-items: center;
    padding: ${props => props.padding || getSize(props.size)["padding"]};
    border-radius: ${props => props.round ? "100%" : "4px"};
    border: ${props => props.border || getColors(props.type)["border"]};
    outline: none;

    &:hover {
        outline: none;
        border: ${props => props.border || getColors(props.type)["hoverBorder"]};
        background: ${props => getColors(props.type)["hoverBackground"]} !important;
        color: ${props => getColors(props.type)["hoverColor"]};
    }

    &:focus {
        border: ${props => props.border || getColors(props.type)["hoverBorder"]};
        outline: none;
    }
`;

const Icon = styled.img`
    border-radius: ${props => props.round ? "100%" : "0"};
    margin-right: ${props => props.text ? "20px" : "0"};
`;

const imageButtonPropTypes = {
    imageProps: PropTypes.object,
    text: PropTypes.string,
};

const ImageButton = ({ text, imageProps, ...restProps }) => {
    return (
        <Button display="flex" {...restProps}>
            {imageProps && <Icon text={text} {...imageProps} />}
            {text}
        </Button>
    );
};

ImageButton.propTypes = imageButtonPropTypes;

const linkButtonPropTypes = {
    imageProps: PropTypes.object,
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
};

const LinkButton = ({ text, imageProps, to, linkType, ...restProps }) => {
    if (linkType === "href") {
        return (
            <a href={to}>
                <ImageButton text={text} imageProps={imageProps} {...restProps} />
            </a>
        );
    } else {
        return (
            <Link to={to}>
                <ImageButton text={text} imageProps={imageProps} {...restProps} />
            </Link>
        );
    }
};

LinkButton.propTypes = linkButtonPropTypes;

export {
    Button,
    ImageButton,
    LinkButton
};
