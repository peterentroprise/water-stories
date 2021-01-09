import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

import { Story } from "../../interfaces";
import Link from "../../components/Link";

type Props = {
  data: Story;
};

const StoryListItem = ({ data }: Props) => (
  <Link href={`/stories/${data.slug}`}>
    <ListItem disableGutters button key={data.slug} divider>
      <ListItemText primary={data.storyName} secondary={data.storyShortDescription} />
    </ListItem>
  </Link>
);

export default StoryListItem;
