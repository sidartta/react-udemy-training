import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.handleConfirmation();
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={handleClickOpen}
        key="delete"
        aria-label="delete"
        size="large"
        color="warning"
      >
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Are you sure you want to delete these expenses ?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The expenses selected will be permanently deleted from your expenses list !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="warning">
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
