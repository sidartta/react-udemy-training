// External import
import { createTheme, alpha } from '@mui/material/styles';

// Theme
const defaultThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      light: '#60748b',
      main: '#34495e',
      dark: '#092234',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6effa0',
      main: '#2ecc71',
      dark: '#009a44',
      contrastText: '#000000',
    },
    background: {
      default: '#ecf0f1',
    },
  },
  typography: {
    fontFamily: ['Outfit', 'sans-serif'].join(','),
  },
};

export const defaultTheme = createTheme(defaultThemeOptions);

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      light: '#60748b',
      main: '#34495e',
      dark: '#092234',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6effa0',
      main: '#2ecc71',
      dark: '#009a44',
      contrastText: '#000000',
    },
    background: {
      default: '#ecf0f1',
    },
  },
};

export const themeConfig = (mode) => ({
  ...defaultThemeOptions,
  ...(mode === 'dark' && darkTheme),
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(defaultTheme.palette.secondary.light, 0.25),
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.selected && {
            backgroundColor: alpha(defaultTheme.palette.secondary.light, 0.25),
          }),
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: defaultTheme.palette.secondary.main,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.MuiTableCell-head': {
            fontSize: '.85rem',
            backgroundColor: alpha(defaultTheme.palette.primary.light, 0.1),
          },
          '&.MuiTableCell-body': {
            fontSize: '.85rem',
          },
        },
      },
    },
  },
});
