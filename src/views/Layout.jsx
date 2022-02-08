// External imports
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Internal imports
import ThemeWrapper from '../components/ThemeWrapper.jsx';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import './_layout.css';

// Styled Components
const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10vh',
  marginBottom: '10vh',
}));
const MainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: '.25rem',
  fontWeight: '300',
}));
const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: '300',
}));

// Component
const Layout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  return (
    <ThemeWrapper>
      {!isAuthenticated && (
        <TitleBox>
          <MainTitle variant="h2">
            <span>X</span>pensify
          </MainTitle>
          <Subtitle variant="subtitle1">
            Smart & Simple Expenses Management
          </Subtitle>
        </TitleBox>
      )}
      <Outlet />
      {!isAuthenticated ? <Footer /> : <NavBar />}
    </ThemeWrapper>
  );
};

export default Layout;
