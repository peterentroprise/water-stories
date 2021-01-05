import { GetStaticProps, GetStaticPaths } from "next";

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
  if (errors) {
    return (
      <Layout title="Error | Entroprise">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.storyName : "Detail"} | Entroprise`}>
      {console.log(item)}
      {item && <StoryDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on products
  const data = await fetchAPI(GET_STORY_COLLECTION);
  const items = data.storyCollection.items;
  const paths = items.map((item: Story) => ({
    params: { id: item.slug.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const data = await fetchAPI(GET_STORY_COLLECTION);

    const items = data.storyCollection.items;
    const item = items.find((item: Story) => item.slug === String(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
