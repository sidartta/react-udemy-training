// External Imports
import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

// Local imports
import { MOBILE } from '@assets/theme';

// Styled Component
export const CtaButtonStyles = styled(Button)`
  && {
    font-family: inherit;
    font-size: 1.5rem;
    width: 100%;
    color: ${(props) => props.theme.palette.text2};
    background-color: ${(props) => props.theme.palette.surface2};
    border: 1px solid ${(props) => props.theme.palette.brand};
    &:hover {
      background-color: ${(props) => props.theme.palette.surface4};
    }
    &:active {
      font-weight: 600;
    }
  }
`;

export const LoginButtonStyles = styled.div`
  display: flex;
  padding: 0.5rem 1rem;

  border: 1px solid ${(props) => props.theme.palette.brand};
  border-radius: 2rem;

  font-size: 1.2rem;
  background-color: ${(props) => props.theme.palette.surface1};
  color: ${(props) => props.theme.palette.text1};

  transition: all 0.1s ease-in;

  .icon {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    font-size: 2rem;
    font-weight: 400;
    padding: 0.5rem 0;
    margin-left: 2rem;
  }

  @media only screen and (max-width: ${MOBILE}) {
    justify-content: center;
    align-items: center;
    width: 75%;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.surface2};
    color: ${(props) => props.theme.palette.text2};
    transform: scale(0.95);
  }
`;
