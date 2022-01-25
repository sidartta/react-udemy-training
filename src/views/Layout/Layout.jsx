// External imports
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

// Internal imports
import Footer from '@components/Footer/Footer.jsx';
import AppGlobalStyles, {
  MainContainer,
  TitleContainer,
} from './Layout.styles';
import Header from '@components/Header/Header.jsx';
import { theme } from '@assets/theme';

// Component
const Layout = () => {
  const [themeApplied, setThemeApplied] = useState(theme.light);
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  return (
    <ThemeProvider theme={themeApplied}>
      <AppGlobalStyles />
      <MainContainer>
        {!isAuthenticated ? (
          <TitleContainer>
            <h1>
              <span>X</span>pensify
            </h1>
            <h3>Smart & Simple Expenses Management</h3>
          </TitleContainer>
        ) : (
          <Header />
        )}
        <Outlet />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default Layout;
