// External imports
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Internal imports
import { selectUserAthStatus } from '@store/auth/auth.slice';

// Component
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectUserAthStatus);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
