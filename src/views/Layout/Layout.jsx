// External imports
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Internal imports
import { selectUserAthStatus } from '@store/auth/auth.slice';
import Header from '@components/Header/Header.jsx';
import AuthStatus from '@components/Auth/AuthStatus.jsx';

// Assets
import '@app/App.scss';

// Component
const Layout = () => {
  const isAuthenticated = useSelector(selectUserAthStatus);

  return (
    <>
      <div>
        <h1>Expensify</h1>
        <h3>Smart & Simple Expenses Management</h3>
        <AuthStatus />
      </div>
      {isAuthenticated && <Header />}
      {isAuthenticated && <Outlet />}
    </>
  );
};

export default Layout;
