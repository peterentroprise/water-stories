import { GetStaticProps } from "next";
import { Box, Card, CardHeader, CardContent } from "@material-ui/core";

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

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Stories | Entroprise">
    <Box my={3}>
      <Card variant="outlined">
        <CardHeader title="Stories" />
        <CardContent>
          <StoryList items={items} />
        </CardContent>
      </Card>
    </Box>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAPI(GET_STORY_COLLECTION);
  const items = data.storyCollection.items;
  return { props: { items } };
};

export default WithStaticProps;
