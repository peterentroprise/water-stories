import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

import ThreadInput from "./ThreadInput";

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: theme.palette.background.paper,
  },
  dialogTitle: {
    paddingTop: theme.spacing(3),
  },
  dialogActions: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

const NewThreadDialog = ({ onClose, open }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={handleClose} open={open}>
      <DialogTitle className={classes.dialogTitle}>
        Create New Thread
      </DialogTitle>
      <DialogContent>
        <ThreadInput />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          type="submit"
          form="new-thread-form"
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const NewThread = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Thread
      </Button>
      <NewThreadDialog open={open} onClose={handleClose} />
    </>
  );
};

export default NewThread;
