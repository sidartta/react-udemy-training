// External imports
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Assets
const provider = {
  google: {
    icon: <FaGoogle />,
    text: 'Continue with Google',
    variant: 'contained',
  },
  email: {
    icon: null,
    text: 'Login with email',
    variant: 'outlined',
  },
};

// Styled Components
export const LoginButtonStyled = styled(Button)(({ theme }, props) => ({
  width: '100%',
  marginBottom: '.5rem 0',
}));

// Component
const LoginButton = (props) => {
  return (
    <LoginButtonStyled
      variant={provider[props.provider].variant}
      startIcon={
        !!provider[props.provider].icon && provider[props.provider].icon
      }
      onClick={props.handleClick}
    >
      {provider[props.provider].text}
    </LoginButtonStyled>
  );
};

export default LoginButton;
