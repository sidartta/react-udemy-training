// External imports
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Internal imports
import AuthStatus from '@components/Auth/AuthStatus.jsx';
import Header from '@components/Header/Header.jsx';
import { selectUserAthStatus } from '@store/auth/auth.slice';

// Assets
import '@app/App.scss';

// Component
const Layout = () => {
  const isAuthenticated = useSelector(selectUserAthStatus);

  return (
    <>
      <h1>Expensify</h1>
      <h3>Smart & Simple Expenses Management</h3>
      <AuthStatus />
      {isAuthenticated && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
