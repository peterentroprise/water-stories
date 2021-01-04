import * as React from "react";
import { List } from "@material-ui/core";

import ProductListItem from "./ProductListItem";
import { Product } from "../../interfaces";

type Props = {
  items: Product[];
};

const ProductList = ({ items }: Props) => (
  <List>
    {items.map((item) => (
      <ProductListItem data={item} />
    ))}
  </List>
);

export default ProductList;
