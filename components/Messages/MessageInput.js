import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, AppBar, Toolbar } from "@material-ui/core";

const ADD_MESSAGE = gql`
  mutation($message: String!) {
    insert_messages(objects: { body: $message }) {
      affected_rows
      returning {
        id
        created_at
        user_id
        body
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

const MessageInput = () => {
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
            addMessage({ variables: { message: messageInput } });
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
