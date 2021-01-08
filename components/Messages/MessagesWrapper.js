import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const MessagesWrapper = ({ thread }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <MessageList thread={thread} />
      <MessageInput thread={thread} />
    </div>
  );
};

export default MessagesWrapper;
