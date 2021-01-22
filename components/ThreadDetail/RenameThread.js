import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

import RenameThreadInput from "./RenameThreadInput";

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

const RenameThreadDialog = ({ thread, onClose, open }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={handleClose} open={open}>
      <DialogTitle className={classes.dialogTitle}>Rename Thread</DialogTitle>
      <DialogContent>
        <RenameThreadInput thread={thread} handleClose={handleClose} />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          type="submit"
          form="rename-thread-form"
        >
          Rename
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const RenameThread = ({ thread }) => {
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
      <Button
        color="primary"
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
      >
        Rename Thread
      </Button>
      <RenameThreadDialog thread={thread} open={open} onClose={handleClose} />
    </>
  );
};

export default RenameThread;
