// External imports
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

// Local imports
import { LoginButtonStyles } from './LoginButton.styles';

// Assets
const icons = {
  google: <FaGoogle />,
};

// Component
const LoginButton = (props) => {
  return (
    <LoginButtonStyles onClick={props.handleClick}>
      <h1 className="icon">{icons[props.provider]}</h1>
      <h3 className="text">Log in with Google</h3>
    </LoginButtonStyles>
  );
};

export default LoginButton;
