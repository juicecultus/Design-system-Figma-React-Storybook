import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden='true'>
    <path
      d='M25.9 27.232C26.2774 27.232 26.6585 27.0885 26.9471 26.8014C27.5243 26.2274 27.5243 25.2963 26.9471 24.7186L20.5942 18.4L26.9471 12.0814C27.5243 11.5074 27.5243 10.5763 26.9471 9.99855C26.3699 9.42447 25.4338 9.42447 24.8529 9.99855L18.5 16.3171L12.1471 9.99855C11.5699 9.42447 10.6338 9.42447 10.0529 9.99855C9.4757 10.5726 9.4757 11.5037 10.0529 12.0814L16.4058 18.4L10.0529 24.7186C9.4757 25.2926 9.4757 26.2237 10.0529 26.8014C10.3415 27.0885 10.7226 27.232 11.1 27.232C11.4774 27.232 11.8585 27.0885 12.1471 26.8014L18.5 20.4829L24.8529 26.8014C25.1415 27.0885 25.5226 27.232 25.9 27.232Z'
      fill='black'
    />
  </CloseIconWrapper>
);