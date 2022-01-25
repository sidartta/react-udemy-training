// External imports
import React from 'react';

// Local imports
import { CtaButtonStyles } from './_Buttons.styles';

// Component
const CtaButton = (props) => {
  const {
    handleClick = undefined,
    type = 'button',
    text = '',
    ...propsRest
  } = props;
  return (
    <CtaButtonStyles
      theme={props.theme}
      onClick={handleClick}
      variant="contained"
      type={type}
      {...propsRest}
    >
      {text}
    </CtaButtonStyles>
  );
};

export default CtaButton;
