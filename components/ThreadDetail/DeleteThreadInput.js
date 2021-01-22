import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
  deleteButton: {},
}));

const DeleteThreadInput = ({ thread }) => {
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

  return (
    <Button
      // variant="outlined"
      startIcon={<DeleteOutlineOutlinedIcon />}
      className={classes.deleteButton}
      onClick={() => {
        deleteThread({
          variables: {
            threadId: thread.id,
          },
        });
      }}
    >
      Delete Thread
    </Button>
  );
};

export default DeleteThreadInput;
