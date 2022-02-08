// External imports
import React from 'react';
import Button from '@mui/material/Button';

// Component
const CtaButton = (props) => {
  const {
    handleClick = undefined,
    type = 'button',
    text = '',
    ...propsRest
  } = props;
  return (
    <Button
      onClick={handleClick}
      variant="contained"
      type={type}
      {...propsRest}
    >
      {text}
    </Button>
  );
};

export default CtaButton;
