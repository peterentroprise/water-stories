import * as React from 'react'

import { Product } from '../../interfaces'

type ListDetailProps = {
  item: Product
}

const ListDetail = ({ item: product }: ListDetailProps) => (
  <div>
    {console.log(product)}
    <h1>{product.productName}</h1>
    <p>Description: {product.productDescription}</p>
    <p>ID: {product.sys.id}</p>
  </div>
)

export default ListDetail
