import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
    margin: ${props => props.margin || "0"};
    border-radius: ${props => props.round ? '100%' : '0'};
    max-width: ${props => props.maxWidth || ""};
    max-height: ${props => props.maxHeight || ""};
    padding: ${props => props.padding || ""};
    object-fit: ${props => props.objectFit || ""};
    padding: ${props => props.padding || ""};
`;

const propTypes = {
    altImage: PropTypes.string,
};

const Icon = ({ altImage, ...restProps }) => {
    const onImageLoadError = (e) => {
        if (altImage) {
            e.target.src = altImage;
        }
    };
    return <Image {...restProps} onError={onImageLoadError} />;
};

Icon.propTypes = propTypes;

export default Icon;
