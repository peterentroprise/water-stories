import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { TextField } from "@material-ui/core";

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

const MessageInput = () => {
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
      className="formInput"
      onSubmit={(e) => {
        e.preventDefault();
        addMessage({ variables: { message: messageInput } });
      }}
    >
      <TextField
        fullWidth
        label="New Message"
        variant="outlined"
        value={messageInput}
        placeholder="Enter a message..."
        ref={(n) => (input = n)}
        onChange={(e) => setMessageInput(e.target.value)}
      />
    </form>
  );
};

export default MessageInput;
