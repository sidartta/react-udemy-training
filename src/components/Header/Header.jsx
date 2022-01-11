// External imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Internal imports
// ...

// Assets
import '@app/App.scss';

// Component
const Header = () => {
  return (
    <>
      <nav style={{ marginBottom: '40px' }}>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              Add Expense
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/view"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              View Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              Need Help ?
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
