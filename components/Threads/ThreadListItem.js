import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ThreadListItem = ({ thread }) => {
  return (
    <ListItem divider>
      <ListItemText
        primary={thread.threadName}
        secondary={thread.threadDescription}
      />
    </ListItem>
  );
};

export default ThreadListItem;
