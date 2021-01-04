import { GetStaticProps } from "next";
import { Typography } from "@material-ui/core";

import { Product } from "../../interfaces";
import fetchAPI from "../../lib/fetchAPI";
import Layout from "../../components/Layout";
import ProductList from "../../components/Product/ProductList";

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
    <ProductList items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAPI(GET_PRODUCT_COLLECTION);
  const items = data.productCollection.items;
  return { props: { items } };
};

export default WithStaticProps;
