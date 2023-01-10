import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { IconButton, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Slide from '@mui/material/Slide';

import LoginForm from '../LoginForm/LoginForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function LoginSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Login">
        <IconButton onClick={handleClickOpen}>
          <LoginIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        disableScrollLock={true}
        PaperProps={{ sx: { position: 'fixed', top: 10, right: 10, m: 0 } }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <LoginForm size="small" handleClose={handleClose} />
      </Dialog>
    </div>
  );
}
