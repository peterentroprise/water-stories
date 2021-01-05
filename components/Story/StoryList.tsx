import * as React from "react";
import { List } from "@material-ui/core";

import StoryListItem from "./StoryListItem";
import { Story } from "../../interfaces";

type Props = {
  items: Story[];
};

const StoryList = ({ items }: Props) => (
  <List>
    {items.map((item) => (
      <StoryListItem key={item.slug} data={item} />
    ))}
  </List>
);

export default StoryList;
