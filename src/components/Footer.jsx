// External imports
import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Styled Components
export const FooterStyles = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '2.5rem',
  position: 'absolute',
  bottom: '0',
  paddingBottom: '1rem',
  fontSize: '.75rem',
  textAlign: 'center',
}));

// Component
const Footer = () => {
  return (
    <FooterStyles>
      <div className="legal">
        <span>&copy; 2022 by Mohamed Khalf, All rights reserved.</span>
      </div>
    </FooterStyles>
  );
};

export default Footer;
