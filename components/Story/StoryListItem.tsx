import React from "react";
import { ListItem } from "@material-ui/core";

import { Story } from "../../interfaces";
import Link from "../../components/Link";

type Props = {
  data: Story;
};

const StoryListItem = ({ data }: Props) => (
  <Link href={`/stories/${data.slug}`}>
    <ListItem disableGutters button key={data.slug}>
      {data.storyName}
    </ListItem>
  </Link>
);

export default StoryListItem;
