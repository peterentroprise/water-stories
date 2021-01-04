import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DraftsIcon from "@material-ui/icons/Drafts";
import Typography from "@material-ui/core/Typography";

const TaskItem = ({ index, todo }) => {
  return (
    <ListItem alignItems="flex-start">
      {todo.is_completed && (
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
      )}

      <ListItemText primary={todo.title} secondary={todo.user.name} />
    </ListItem>
  );
};

export default TaskItem;
