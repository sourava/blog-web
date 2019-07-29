import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Head = styled.h5`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    margin-bottom: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    line-height: 1;
    font-size: 18px;
`;
const Text = styled.span`
    border-bottom: 1px solid rgba(0, 0, 0, 0.53);
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: -1px;
`;

const propTypes = {
    text: PropTypes.string.isRequired,
};

const Heading = ({ text }) => {
    return (
        <Head>
            <Text>
                {text}
            </Text>
        </Head>
    );
};

Heading.propTypes = propTypes;

export default Heading;
