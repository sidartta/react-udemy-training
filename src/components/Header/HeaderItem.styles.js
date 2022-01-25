// External Imports
import styled from 'styled-components';

// Local imports
import { MOBILE } from '@assets/theme';

// Styled Component
export const HeaderItemStyles = styled.div`
  @media only screen and (max-width: ${MOBILE}) {
    padding: 0 1rem;
    .navIcon {
      display: flex;
      flex-direction: column;
      justify-content: center;

      color: ${(props) => props.theme.palette.surface3};
      font-size: 2rem;
    }
    .navText {
      display: none;
    }
    .navLink {
      opacity: 0.5;
      &--active {
        opacity: 1;
        .navIcon {
          color: ${(props) => props.theme.palette.brand};
        }
      }
    }

    border-radius: ${(props) => (props.focused ? '20%' : '0%')};
    margin: ${(props) => (props.focused ? '0.15rem 0' : '0')};
    background-color: ${(props) =>
      props.focused ? props.theme.palette.surface4 : 'none'};
  }
`;
