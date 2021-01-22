import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import Link from "../../components/Link";

const ThreadListItem = ({ thread }) => {
  return (
    <Link href={`/threads/${thread.id}`}>
      <ListItem disableGutters divider>
        <ListItemAvatar>
          <Avatar>{thread.threadName.charAt(0).toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={thread.threadName} />
      </ListItem>
    </Link>
  );
};

export default ThreadListItem;
