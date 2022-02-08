// External imports
import React, { forwardRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';

// Internal imports
import UserMenu from './UserMenu.jsx';

// Configs
const UserMenuNavBarItem = forwardRef((props, ref) => (
  <UserMenu {...props} ref={ref} />
));

// Styled Components
const NavBarContainer = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
}));

// Component
const NavBar = () => {
  const [value, setValue] = useState(0);
  return (
    <NavBarContainer
      elevation={3}
      square
      color="primary"
      component="nav"
      position="sticky"
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Dash"
          icon={<DashboardIcon />}
          component={NavLink}
          to={'/dashboard'}
        />
        <BottomNavigationAction
          label="View"
          icon={<TableViewIcon />}
          component={NavLink}
          to={'/view'}
        />
        <BottomNavigationAction
          label="New"
          icon={<AddCircleOutlineIcon />}
          component={NavLink}
          to={'/add'}
        />
        <BottomNavigationAction
          label="Help"
          icon={<HelpIcon />}
          component={NavLink}
          to={'/help'}
        />
        <BottomNavigationAction
          label="Account"
          icon={<AccountCircleIcon />}
          component={UserMenuNavBarItem}
        />
      </BottomNavigation>
    </NavBarContainer>
  );
};

export default NavBar;
