import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import moment from "moment";

const MessageItem = ({ message }) => {
  const createdAtDate = moment(message.created_at).format("MMM Do");
  const createdAtTime = moment(message.created_at).format("LT");
  const secondary = `${message.user.name} on ${createdAtDate} at ${createdAtTime}`;

  return (
    <ListItem divider>
      <ListItemText primary={message.body} secondary={secondary} />
    </ListItem>
  );
};

export default MessageItem;
