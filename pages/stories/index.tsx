import { GetStaticProps } from "next";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { useFlags } from "@happykit/flags";

import { Story } from "../../interfaces";
import fetchAPI from "../../lib/fetchAPI";
import Layout from "../../components/Layout";
import StoryList from "../../components/Story/StoryList";

type Props = {
  items: Story[];
};

const GET_STORY_COLLECTION = `
query getStoryCollection {
  storyCollection {
    items {
      slug
      storyName
      coverImage {
        url
      }
      coverVideoUrl
      storyShortDescription
      storyLongDescription {
        json
      }
      sys {
        id
      }
    }
  }
}`;

const WithStaticProps = ({ items }: Props) => {
  const flags = useFlags();
  return (
    <Layout title="Stories">
      {(flags.stories && (
        <Card variant="outlined">
          <CardContent>
            <StoryList items={items} />
          </CardContent>
        </Card>
      )) || (
        <Box my={3}>
          <Typography>The stories feature is not enabled.</Typography>
        </Box>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAPI(GET_STORY_COLLECTION);
  const items = data.storyCollection.items;
  return { props: { items } };
};

export default WithStaticProps;
