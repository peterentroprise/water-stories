import * as React from 'react'
import ListItem from './ListItem'
import { Product } from '../../interfaces'

type Props = {
  items: Product[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.sys.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
