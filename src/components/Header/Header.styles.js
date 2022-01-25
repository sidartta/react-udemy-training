// External Imports
import styled from 'styled-components';

// Local imports
import { MOBILE } from '@assets/theme';

// Styled Component
export const HeaderStyles = styled.nav`
  position: relative;
  top: 0;
  display: flex;

  background-color: ${(props) => props.theme.palette.surface2};

  @media only screen and (max-width: ${MOBILE}) {
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }
`;
