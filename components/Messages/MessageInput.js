import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, AppBar, Toolbar } from "@material-ui/core";
import {  } from "./MessageList";

const ADD_MESSAGE = gql`
  mutation($message: String!, $thread_id: Int!) {
    insert_messages(objects: { body: $message, thread_id: $thread_id }) {
      affected_rows
      returning {
        id
        created_at
        user_id
        body
        thread_id
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

const MessageInput = ({ thread }) => {
  const classes = useStyles();

  let input;

  const [messageInput, setMessageInput] = useState("");

  const resetInput = () => {
    setMessageInput("");
  };

  const [addMessage] = useMutation(ADD_MESSAGE, {
    onCompleted: resetInput,
  });

  return (
    <AppBar elevation={0} className={classes.appBar}>
      <Toolbar>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMessage({
              variables: { message: messageInput, thread_id: thread.id },
            });
          }}
        >
          <TextField
            fullWidth
            value={messageInput}
            placeholder="Enter a message..."
            ref={(n) => (input = n)}
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default MessageInput;
