import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const UPDATE_THREAD_NAME = gql`
  mutation($threadId: Int!, $threadName: String!) {
    update_threads_by_pk(
      pk_columns: { id: $threadId }
      _set: { threadName: $threadName }
    ) {
      id
      threadName
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    position: "sticky",
    bottom: 0,
  },
}));

const RenameThreadInput = ({ thread, handleClose }) => {
  const classes = useStyles();
  const router = useRouter();
  let input;

  const [threadName, setThreadName] = useState(thread.threadName);

  const resetInput = () => {
    setThreadName("");
  };

  const updateCache = (cache, { data }) => {
    cache.modify({
      id: data.update_threads_by_pk.id,
      fields: {
        threadName() {
          return data.update_threads_by_pk.threadName;
        },
      },
    });
  };

  const [addThread] = useMutation(UPDATE_THREAD_NAME, {
    update: updateCache,
    onCompleted() {
      resetInput();
      handleClose();
    },
  });

  return (
    <form
      id="rename-thread-form"
      onSubmit={(e) => {
        e.preventDefault();
        addThread({
          variables: {
            threadId: thread.id,
            threadName: threadName,
          },
        });
      }}
    >
      <TextField
        autoFocus
        fullWidth
        value={threadName}
        label="Thread Name"
        placeholder="Enter thread name..."
        ref={(n) => (input = n)}
        onChange={(e) => setThreadName(e.target.value)}
      />
    </form>
  );
};

export default RenameThreadInput;
