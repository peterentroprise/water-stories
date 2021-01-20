import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import { Story } from "../../interfaces";
import StoryVideo from "./StoryVideo";

type ListDetailProps = {
  item: Story;
};

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const StoryDetail = ({ item: story }: ListDetailProps) => {
  const classes = useStyles();
  const storyLongDescription =
    story.storyLongDescription.json.content[0].content[0].value;
  return (
    <>
      <Box my={3}>
        <Box my={3}>
          <StoryVideo data={story} />
        </Box>
        <Box mt={2} mb={1}></Box>
        <Card variant="outlined">
          <CardMedia
            className={classes.media}
            image={story.coverImage.url}
            title={story.storyName}
          />
          <CardHeader title={story.storyShortDescription} />
          <CardContent>
            <Typography>{storyLongDescription}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default StoryDetail;
