import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const OnlineUser = ({ user }) => {
  return (
    <ListItem disableGutters alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={user.name} />
      </ListItemAvatar>
      <ListItemText primary={user.name} />
    </ListItem>
  );
};

export default OnlineUser;
