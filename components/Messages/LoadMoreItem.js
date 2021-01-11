import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const MessageItem = ({ handleLoad }) => {
  return (
    <ListItem divider>
      <ListItemText button onClick={handleLoad} primary="Load Older Messages" />
    </ListItem>
  );
};

export default MessageItem;
