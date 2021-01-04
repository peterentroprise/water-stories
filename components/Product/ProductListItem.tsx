import React from "react";
import { ListItem } from "@material-ui/core";

import { Product } from "../../interfaces";
import Link from "../../components/Link";

type Props = {
  data: Product;
};

const ProductListItem = ({ data }: Props) => (
  <Link href={`/products/${data.slug}`}>
    <ListItem disableGutters button key={data.slug}>
      {data.productName}
    </ListItem>
  </Link>
);

export default ProductListItem;
