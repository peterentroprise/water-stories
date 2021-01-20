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

import IndeterminateLoader from "../IndeterminateLoader";
import StoryGraph from "./StoryGraph";

const GET_STORIES = gql`
  query getThreads {
    storyCollection {
      items {
        storyName
        slug
      }
    }
  }
`;

const StoryGraphWrapper = () => {
  const { loading, error, data } = useQuery(GET_STORIES);

  if (loading) {
    return <IndeterminateLoader />;
  }
  if (error) {
    return <Typography>Error!</Typography>;
  }
  return <StoryGraph stories={data.storyCollection.items} />;
};

export default StoryGraphWrapper;
export { GET_STORIES };
