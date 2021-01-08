import React, { Fragment, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
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

import ThreadListItem from "./ThreadListItem";

const GET_THREADS = gql`
  query getThreads {
    threads(order_by: { updated_at: desc }) {
      threadName
      threadDescription
      id
      created_at
      updated_at
    }
  }
`;

const ThreadList = (props) => {
  const { threads } = props;
  return (
    <List>
      {threads.map((thread, index) => (
        <ThreadListItem key={index} thread={thread} />
      ))}
    </List>
  );
};

const ThreadListQuery = () => {
  const { loading, error, data } = useQuery(GET_THREADS);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }
  if (error) {
    console.error(error);
    return <Typography>Error!</Typography>;
  }
  return <ThreadList threads={data.threads} />;
};

export default ThreadListQuery;
export { GET_THREADS };
