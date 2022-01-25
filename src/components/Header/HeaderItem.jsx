// External imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local imports
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
          className={({ isActive }) =>
            isActive ? 'navLink navLink--active' : 'navLink'
          }
        >
          <h1 className="navIcon">{icon}</h1>
          <span className="navText">{text}</span>
        </NavLink>
      ) : (
        <UserStatus iconClass={'navIcon'} textClass={'navText'} />
      )}
    </HeaderItemStyles>
  );
};

export default HeaderItem;
