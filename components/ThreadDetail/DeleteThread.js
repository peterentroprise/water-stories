import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import { GET_THREADS } from "../Threads/ThreadList";

const DELETE_THREAD = gql`
  mutation($threadId: Int!) {
    delete_messages(where: { thread_id: { _eq: $threadId } }) {
      affected_rows
    }
    delete_threads_by_pk(id: $threadId) {
      id
    }
  }
`;

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

const DeleteThreadDialog = ({ thread, onClose, open }) => {
  const classes = useStyles();
  const router = useRouter();

  const updateCache = (cache, { data }) => {
    const existingThreads = cache.readQuery({
      query: GET_THREADS,
    });

    const newThreads = existingThreads.threads.filter(
      (thread) => thread.id !== data.delete_threads_by_pk.id
    );
    cache.writeQuery({
      query: GET_THREADS,
      data: { threads: newThreads },
    });
  };

  const [deleteThread] = useMutation(DELETE_THREAD, {
    update: updateCache,
    onCompleted() {
      router.push("/threads");
    },
  });

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={handleClose} open={open}>
      <DialogTitle className={classes.dialogTitle}>Delete Thread</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your are about to permanently delele the thread {thread.threadName}.
          Are you sure you want to continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          onClick={() => {
            deleteThread({
              variables: {
                threadId: thread.id,
              },
            });
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteThread = ({ thread }) => {
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
        disableElevation
        startIcon={<DeleteOutlineOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Delete Thread
      </Button>
      <DeleteThreadDialog thread={thread} open={open} onClose={handleClose} />
    </>
  );
};

export default DeleteThread;
