// External Imports
import styled from 'styled-components';

// Local imports
import { MOBILE, primaryTextColor, dividerColor } from '@assets/theme';

// Styled Component
export const FooterStyles = styled.div`
  background-color: ${(props) => props.theme.palette.surface2};
  color: ${(props) => props.theme.palette.text1};

  a:link,
  a:visited {
    margin: auto 0;
    margin-left: 1.5rem;

    font-weight: 600;
    font-size: 1.5rem;
    color: inherit;
    text-decoration: none;
  }

  .legal {
    margin-top: auto 0;
    margin-right: 1rem;
    font-size: 1rem;
  }

  @media only screen and (max-width: ${MOBILE}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0.25rem 1.25rem;
    height: 5rem;
    margin-top: auto;
  }
`;
