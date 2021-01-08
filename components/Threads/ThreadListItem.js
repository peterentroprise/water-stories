import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import Link from "../../components/Link";

const ThreadListItem = ({ thread }) => {
  return (
    <Link href={`/threads/${thread.id}`}>
      <ListItem divider>
        <ListItemText
          primary={thread.threadName}
          secondary={thread.threadDescription}
        />
      </ListItem>
    </Link>
  );
};

export default ThreadListItem;
