// External Imports
import React, { forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';

// Configs
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Component
const AlertDialogSlide = (props) => {
  const { dialogState, handleConfirmation, closeDialog } = props;

  return (
    <div>
      <Dialog
        open={dialogState}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {'Are you sure you want to delete these expenses ?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The expenses selected will be permanently deleted from your expenses
            list !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmation}
            variant="contained"
            color="warning"
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
