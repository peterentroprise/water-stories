import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, AppBar, Toolbar } from "@material-ui/core";

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

  let input;

  const [threadInput, setThreadInput] = useState("");

  const resetInput = () => {
    setThreadInput("");
  };

  const [addThread] = useMutation(ADD_THREAD, {
    onCompleted: resetInput,
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
