// External imports
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

// Local imports
import { LoginButtonStyles } from './_Buttons.styles';

// Assets
const icons = {
  google: <FaGoogle />,
};

// Component
const LoginButton = (props) => {
  return (
    <LoginButtonStyles onClick={props.handleClick}>
      <h1 className="icon">{icons[props.provider]}</h1>
      <span className="text">Log in with Google</span>
    </LoginButtonStyles>
  );
};

export default LoginButton;
