import { GetStaticProps, GetStaticPaths } from "next";
import { useFlags } from "@happykit/flags";
import { Box, Typography } from "@material-ui/core";

import { Story } from "../../interfaces";
import fetchAPI from "../../lib/fetchAPI";
import Layout from "../../components/Layout";
import StoryDetail from "../../components/Story/StoryDetail";

type Props = {
  item?: Story;
  errors?: string;
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

const StaticPropsDetail = ({ item, errors }: Props) => {
  const flags = useFlags();
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.storyName : "Detail"}`}>
      {(flags.stories && <> {item && <StoryDetail item={item} />}</>) || (
        <Box my={3}>
          <Typography>The stories feature is not enabled.</Typography>
        </Box>
      )}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchAPI(GET_STORY_COLLECTION);
  const items = data.storyCollection.items;
  const paths = items.map((item: Story) => ({
    params: { id: item.slug.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const data = await fetchAPI(GET_STORY_COLLECTION);
    const items = data.storyCollection.items;
    const item = items.find((item: Story) => item.slug === String(id));
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
