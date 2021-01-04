import React from 'react'
import Link from "../../components/Link";

import { Product } from '../../interfaces'

type Props = {
  data: Product
}

const ListItem = ({ data }: Props) => (
  <Link href={`/products/${data.sys.id}`}>
    {console.log(data)}
    <a>
      {data.productName}: {data.productDescription}
    </a>
  </Link>
)

export default ListItem
