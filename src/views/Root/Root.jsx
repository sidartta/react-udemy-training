// External imports
import React from 'react';
import { Outlet } from 'react-router-dom';

// Assets
import Header from '@components/Header/Header.jsx';
import '@app/App.scss';

// Component
const Root = () => (
  <>
    <h1> Welcome to Expensify</h1>
    <Header />
    <Outlet />
  </>
);

export default Root;
