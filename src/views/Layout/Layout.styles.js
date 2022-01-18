// External Imports
import styled, { createGlobalStyle } from 'styled-components';

// Local imports
import { MOBILE } from '@assets/theme';

// Global Styles
const AppGlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        @media only screen and (max-width: ${MOBILE}) {
            font-size: 75%;
        }
    }
    body {
        font-family: 'Outfit', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
    }
`;

export default AppGlobalStyles;

// Styled Component
export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.colors.body};
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${MOBILE}) {
    height: 100vh;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  color: ${(props) => props.theme.colors.headerTitle};
  display: flex;
  margin-top: 20vh;
  margin-bottom: 20rem;
  h1 {
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.75rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media only screen and (max-width: ${MOBILE}) {
    margin-bottom: 10rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
