// External imports
import React from 'react';

// Local imports
import { FooterStyles } from './Footer.styles';

// Component
const Footer = () => {
  return (
    <FooterStyles>
      <a href="https://sidartta.github.io/" target="_blank">
        About me
      </a>
      <div className="legal">
        <span>
          &copy; 2022 by Mohamed Khalf
          <br />
          All rights reserved.
        </span>
      </div>
    </FooterStyles>
  );
};

export default Footer;
