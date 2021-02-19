import React from "react";

import {
  Typography,
  Checkbox,
  IconButton,
  Avatar,
  DraftsIcon,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Link from "../../components/Link";

const RequestsList = ({ requests }) => {
  return (
    <List disablePadding>
      {requests.map((request, index) => (
        <Link href={`/requests/${request.id}`}>
          <ListItem key={index} disableGutters>
            <ListItemText>{request.name}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default RequestsList;
