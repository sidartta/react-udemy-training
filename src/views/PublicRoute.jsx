// External imports
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Local imports
import { selectUserAthStatus } from '../store/auth/auth.slice';

// Component
const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectUserAthStatus);
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return <> {children} </>;
};

export default PublicRoute;
