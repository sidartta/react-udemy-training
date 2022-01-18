// External imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Internal imports
import UserStatus from '@components/UserStatus/UserStatus.jsx';
import { HeaderItemStyles } from './HeaderItem.styles';

// Definitions

// Component
const HeaderItem = ({ text, target, icon, isUserHandle, focused }) => {
  return (
    <HeaderItemStyles focused={focused}>
      {!isUserHandle ? (
        <NavLink
          to={target}
          className={({ isActive }) => (isActive ? 'navlink navlink--active' : 'navlink')}
        >
          <h1 className="navicon">{icon}</h1>
          <span className="navtext">{text}</span>
        </NavLink>
      ) : (
        <UserStatus iconClass={'navicon'} textClass={'navtext'} />
      )}
    </HeaderItemStyles>
  );
};

export default HeaderItem;
