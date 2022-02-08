// External imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Internal imports
import {
  handleLoginFailure,
  handleLoginSuccess,
} from '../store/auth/auth.slice';
import { startGoogleLogIn } from '../store/auth/auth.actions';
import { initializeExpenses } from '../store/expenses/expenses.actions';
import LoginButton from '../components/LoginButton.jsx';
import HorizontalDivider from '../components/HorizontalDivider.jsx';
// import LoginModal from '../components/Modal/LoginModal.jsx';

// Styled Components
const LoggingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

// Component
const LoginPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleEmailLoginClick = () => {
    setIsModalOpen(true);
  };
  const handleEmailLoginCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <LoggingBox>
      <LoginButton provider={'google'} handleClick={handleLogIn} />
      <HorizontalDivider text="or" />
      <LoginButton provider={'email'} handleClick={handleEmailLoginClick} />
      {/* <LoginModal isOpen={isModalOpen} onClose={handleEmailLoginCancel} /> */}
    </LoggingBox>
  );
};

export default LoginPage;
