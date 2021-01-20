import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography } from "@material-ui/core";

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

const GraphWrapper = () => {
  const { loading, error, data } = useQuery(GET_STORIES);
  return (
    <>
      {loading && <IndeterminateLoader />}
      {error && <Typography>Error!</Typography>}
      {data && <StoryGraph stories={data.storyCollection.items} />}
    </>
  );
};

export default GraphWrapper;
