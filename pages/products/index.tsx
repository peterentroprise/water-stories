import { GetStaticProps } from "next";
import { Box, Card, CardHeader, CardContent } from "@material-ui/core";

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
      slug
      sys {
        id
      }
    }
  }
}`;

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Products List | Entroprise">
    <Box my={3}>
      <Card variant="outlined">
        <CardHeader title="Products" />
        <CardContent>
          <ProductList items={items} />
        </CardContent>
      </Card>
    </Box>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAPI(GET_PRODUCT_COLLECTION);
  const items = data.productCollection.items;
  return { props: { items } };
};

export default WithStaticProps;
