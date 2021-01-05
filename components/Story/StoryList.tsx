import * as React from "react";
import { List } from "@material-ui/core";

import StoryListItem from "./StoryListItem";
import { Story } from "../../interfaces";

type Props = {
  items: Story[];
};

const StoryList = ({ items }: Props) => (
  <List>
    {console.log(items)}
    {items.map((item) => (
      <StoryListItem data={item} />
    ))}
  </List>
);

export default StoryList;
