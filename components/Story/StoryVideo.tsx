import React from "react";
import ReactJWPlayer from "react-jw-player";
import { makeStyles } from "@material-ui/core/styles";

import { Story } from "../../interfaces";

type Props = {
  data: Story;
};

const useStyles = makeStyles((theme) => ({
  player: {
    width: "100%",
  },
}));

const StoryVideo = ({ data }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.player}>
      <ReactJWPlayer
        playerId="story-video"
        playerScript="https://cdn.jwplayer.com/libraries/zu9ZTlIy.js"
        file={data.coverVideoUrl}
      />
    </div>
  );
};

export default StoryVideo;
