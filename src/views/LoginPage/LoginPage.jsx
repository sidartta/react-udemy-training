// External imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Local imports

// Internal imports
import { handleLoginFailure, handleLoginSuccess } from '@store/auth/auth.slice';
import { startGoogleLogIn } from '@store/auth/auth.actions';
import { initializeExpenses } from '@store/expenses/expenses.actions';
import { MainContainer } from './LoginPage.styles';
import LoginButton from '@components/Buttons/LoginButton.jsx';
// Assets

// Component
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <MainContainer>
      <LoginButton provider={'google'} handleClick={handleLogIn}></LoginButton>
    </MainContainer>
  );
};

export default LoginPage;
