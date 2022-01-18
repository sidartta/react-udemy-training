// External Imports
import styled from 'styled-components';

// Local imports
import { MOBILE } from '@assets/theme';

// Styled Component
export const MainContainer = styled.div`
  @media only screen and (max-width: ${MOBILE}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 2rem;
  }
`;

export const LoginButton = styled.button``;
