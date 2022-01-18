// External Imports
import styled from 'styled-components';

// Local imports
import {
  MOBILE,
  headerBg,
  accentColor,
  textIconsColor,
  secondaryTextColor,
} from '@assets/theme';

// Styled Component
export const HeaderStyles = styled.nav`
  display: flex;

  background-color: ${(props) => props.theme.colors.headerBg};

  @media only screen and (max-width: ${MOBILE}) {
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }
`;
