import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, AppBar, Toolbar, IconButton } from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import {} from "./MessageList";

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
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: theme.palette.background.paper,
    top: "auto",
    bottom: 0,
  },
  input: {
    flexGrow: 1,
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addMessage({
          variables: { message: messageInput, thread_id: thread.id },
        });
      }}
    >
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <InputBase
            autoFocus
            fullWidth
            className={classes.input}
            value={messageInput}
            placeholder="Enter a message..."
            ref={(n) => (input = n)}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <IconButton edge="end" type="submit">
            <SendOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </form>
  );
};

export default MessageInput;
