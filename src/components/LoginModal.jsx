// External Imports
import React from 'react';
import {
  Slide,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import styled from 'styled-components';

// Local imports
import LoginForm from './LoginForm.jsx';
import Dialog from '@mui/material/Dialog';

// Utils
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Styled components
const LoginModalStyled = styled(Dialog)`
  .MuiPaper-root {
    width: 80%;
    font-family: inherit;
  }
  .MuiDialog-container {
    && {
      font-family: inherit;
      & > * {
        font-family: inherit;
      }
    }
  }
`;

// Component
const LoginModal = ({ isOpen, onClose }) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  //

  return (
    <LoginModalStyled open={isOpen} TransitionComponent={Transition}>
      <DialogTitle>Login to Xpensify</DialogTitle>
      <DialogContent>
        <LoginForm />
      </DialogContent>
      <DialogActions>
        <Button>Login</Button>
        <Button>Sign-up</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </LoginModalStyled>
  );
};

export default LoginModal;
