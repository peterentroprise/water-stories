import { GetStaticProps } from "next";
import { Typography } from "@material-ui/core";

import { Product } from "../../interfaces";
import fetchAPI from "../../lib/fetchAPI"
import Layout from "../../components/Layout";
import List from "../../components/Product/List";

type Props = {
  items: Product[];
};

const GET_PRODUCT_COLLECTION = `
query getProductCollection {
  productCollection {
    items {
      productName
      productDescription
      sys {
        id
      }
    }
  }
}`;

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Products List | Entroprise">
    <Typography variant="h3">Products List</Typography>
    <List items={items} />
    {console.log(items)}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  const data = await fetchAPI(
    GET_PRODUCT_COLLECTION
  )

  const items = data.productCollection.items;
  return { props: { items } };
};

export default WithStaticProps;
