// External Imports
import styled from 'styled-components';

// Local imports
import { MOBILE, headerBg, accentColor, textIconsColor, secondaryTextColor } from '@assets/theme';

// Styled Component
export const HeaderItemStyles = styled.div`
  @media only screen and (max-width: ${MOBILE}) {
    padding: 0 1rem;
    .navlink {
      opacity: 0.5;
      &--active {
        opacity: 1;
      }
    }
    .navicon {
      display: flex;
      flex-direction: column;
      justify-content: center;

      color: ${textIconsColor};
      font-size: 2rem;
    }
    .navtext {
      display: none;
    }

    border-radius: ${(props) => (props.focused ? '20%' : '0%')};
    margin: ${(props) => (props.focused ? '0.15rem 0' : '0')};
    background-color: ${(props) => (props.focused ? accentColor : 'none')};
  }
`;
