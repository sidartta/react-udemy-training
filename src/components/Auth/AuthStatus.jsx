// External imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Internal imports
import {
  selectUserAthStatus,
  selectUserID,
  handleLoginFailure,
  handleLoginSuccess,
} from '@store/auth/auth.slice';
import { startGoogleLogOut, startGoogleLogIn } from '@store/auth/auth.actions';
import { initializeExpenses } from '@store/expenses/expenses.actions';

// Component
function AuthStatus() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectUserAthStatus);
  const userID = useSelector(selectUserID);

  const handleSignOut = async () => {
    try {
      await dispatch(startGoogleLogOut());
      await dispatch(initializeExpenses('reset'));
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogIn = async () => {
    try {
      const result = await dispatch(startGoogleLogIn());
      dispatch(handleLoginSuccess(result));
      await dispatch(initializeExpenses('set'));
      navigate('/dashboard');
    } catch (err) {
      dispatch(handleLoginFailure(err));
      console.error(err);
      navigate('/');
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <p>
          Welcome {userID}! -- <button onClick={handleSignOut}>Log out</button>
        </p>
      ) : (
        <button onClick={handleLogIn}>Log In</button>
      )}
    </>
  );
}

export default AuthStatus;
