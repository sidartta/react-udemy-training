// External imports
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Paper, CssBaseline } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

// Local imports
import { selectUserThemeMode } from '../store/auth/auth.slice';
import { themeConfig } from '../AppTheme';

// Components
const ThemeWrapper = ({ children }) => {
  const userTheme = useSelector(selectUserThemeMode);
  const theme = useMemo(() => createTheme(themeConfig(userTheme)), [userTheme]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContainer>{children}</ThemeContainer>
    </ThemeProvider>
  );
};

const AppContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: '100%',
  width: '100%',
  padding: '0',
  alignItems: 'center',
  flexDirection: 'column',
  overflowY: 'auto',
}));

const ThemeContainer = ({ children }) => {
  return (
    <AppContainer elevation={0} square>
      {children}
    </AppContainer>
  );
};

export default ThemeWrapper;
