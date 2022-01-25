// External Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from 'styled-components';

// Local imports
import { MOBILE } from '@assets/theme';

// Styled Component
export const ExpenseFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  width: 80%;
  height: 80%;
`;

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  color: ${(props) => props.theme.palette.text1};
  .MuiOutlinedInput-root {
    font-family: inherit;
    font-size: inherit;
    & input {
      color: ${(props) => props.theme.palette.text1};
      font-size: inherit;
      & + fieldset {
        border-color: ${(props) => props.theme.palette.brand};
        font-size: inherit;
        font-family: inherit;
        border-width: 2px;
      }
      &:valid,
      :invalid {
        &:not(:focus):hover {
          background-color: ${(props) => props.theme.palette.surface4};
        }
        :focus + fieldset {
          border-color: ${(props) => props.theme.palette.brand};
          border-left-width: 5px;
          & > legend {
            font-size: inherit;
            font-family: inherit;
          }
        }
      }
      &:valid {
        & + fieldset {
          border-color: ${(props) => props.theme.palette.brand};
        }
      }
      &:invalid + fieldset {
        border-color: red;
      }
    }
  }
  & label {
    color: ${(props) => props.theme.palette.text1};
    font-weight: 600;
    font-size: 2rem;
    font-family: inherit;
  }
  p {
    font-size: 1rem;
  }
`;

export const AutoCompleteStyled = styled(Autocomplete)`
  width: 100%;
  .MuiFormControl-root .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${(props) => props.theme.palette.brand};
      border-width: 2px;
    }
  }
`;
