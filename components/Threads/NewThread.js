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
}));

const NewThreadDialog = ({ onClose, open }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Create New Thread</DialogTitle>
      <DialogContent>
        <ThreadInput />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="my-form">
          Create Thread
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
