// External Imports
import styled from 'styled-components';

// Local imports
import { MOBILE } from '@assets/theme';

// Styled Component
export const LoginButtonStyles = styled.div`
  display: flex;
  padding: 0.5rem 1rem;

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 2rem;

  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.buttonBg};
  color: ${(props) => props.theme.colors.buttonText};

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
    background-color: ${(props) => props.theme.colors.buttonBgHover};
    color: ${(props) => props.theme.colors.buttonTextHover};
    transform: scale(0.95);
  }
`;
