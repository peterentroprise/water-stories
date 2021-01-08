import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, AppBar, Toolbar } from "@material-ui/core";
import { GET_THREADS } from "./ThreadList";

const ADD_THREAD = gql`
  mutation($threadName: String!, $threadDescription: String!) {
    insert_threads(
      objects: {
        threadName: $threadName
        threadDescription: $threadDescription
      }
    ) {
      affected_rows
      returning {
        id
        created_at
        updated_at
        threadName
        threadDescription
      }
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

const ThreadInput = () => {
  const classes = useStyles();
  const router = useRouter();
  let input;

  const [threadInput, setThreadInput] = useState("");

  const resetInput = () => {
    setThreadInput("");
  };

  const updateCache = (cache, { data }) => {
    const existingThreads = cache.readQuery({
      query: GET_THREADS,
    });
    const newThread = data.insert_threads.returning[0];
    cache.writeQuery({
      query: GET_THREADS,
      data: { threads: [newThread, ...existingThreads.threads] },
    });
  };

  const [addThread] = useMutation(ADD_THREAD, {
    update: updateCache,
    onCompleted(data) {
      const id = data.insert_threads.returning[0].id;
      resetInput();
      router.push(`/threads/${id}`);
    },
  });

  return (
    <AppBar elevation={0} className={classes.appBar}>
      <Toolbar>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addThread({
              variables: {
                threadName: threadInput,
                threadDescription: "Default Thread Description",
              },
            });
          }}
        >
          <TextField
            fullWidth
            value={threadInput}
            placeholder="Enter thread name..."
            ref={(n) => (input = n)}
            onChange={(e) => setThreadInput(e.target.value)}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default ThreadInput;
