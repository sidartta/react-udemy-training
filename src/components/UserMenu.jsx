// External imports
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MenuItem,
  Divider,
  IconButton,
  Tooltip,
  Avatar,
  Typography,
  Box,
  Menu,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Local imports
import { startGoogleLogOut } from '../store/auth/auth.actions';
import { initializeExpenses } from '../store/expenses/expenses.actions';
import { selectUserAuth } from '../store/auth/auth.slice';
// Styled Components
const AvatarIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: '0',
  position: 'relative',

  marginLeft: 'auto',
  padding: '12px 16px 12px 8px',

  textAlign: 'center',

  '& .MuiButtonBase-root': {
    margin: 0,
    padding: 0,
  },
}));

// Components
const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const { displayName, email, photoURL } = useSelector(selectUserAuth);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = async () => {
    try {
      await dispatch(startGoogleLogOut());
      await dispatch(initializeExpenses('reset'));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AvatarIconContainer>
      <Tooltip title="Open settings">
        <IconButton onClick={handleClick} sx={{ p: 0 }}>
          <Avatar alt="user avatar" src={photoURL} />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem key="profile">
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem key="account">
          <Typography textAlign="center">Account</Typography>
        </MenuItem>
        <Divider />
        <MenuItem key="logout" onClick={handleSignOut}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </AvatarIconContainer>
  );
};

export default UserMenu;
