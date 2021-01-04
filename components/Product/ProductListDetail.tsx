import * as React from "react";
import {
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

import { Product } from "../../interfaces";

type ListDetailProps = {
  item: Product;
};

const ProductListDetail = ({ item: product }: ListDetailProps) => (
  <>
    <Box my={3}>
      <Card variant="outlined">
        <CardHeader
          title={product.productName}
          subheader={`SKU: ${product.sku}`}
        />
        <CardContent>
          <Typography>ID: {product.sys.id}</Typography>
          <Typography>Slug: {product.slug}</Typography>
          <Typography>Options: {product.sizetypecolor}</Typography>
          <Typography>Link: {product.website}</Typography>
          <Typography>Price: ${product.price}</Typography>
          <Typography>Quantity: {product.quantity}</Typography>
          <Typography>Description: {product.productDescription}</Typography>
        </CardContent>
      </Card>
    </Box>
    <Typography variant="h6"></Typography>
  </>
);

export default ProductListDetail;
