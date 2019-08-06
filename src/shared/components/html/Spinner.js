import React from 'react';
import styled, { keyframes } from 'styled-components';
import spinnerIcon from 'shared/assets/icons/spinner.png';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 1.2rem;
`;

const Icon = styled.img``;

const Spinner = () => {
    return (
        <Rotate><Icon src={spinnerIcon} width="30px" /></Rotate>
    );
};

export default Spinner;
