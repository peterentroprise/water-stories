import React from "react";
import ReactJWPlayer from "react-jw-player";
import { makeStyles } from "@material-ui/core/styles";

import { Story } from "../../interfaces";

const useStyles = makeStyles((theme) => ({
  player: {
    width: "100%",
    borderRadius: 16,
  },
}));

const StoryVideo = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <ReactJWPlayer
        className={classes.player}
        playerId="story-video"
        playerScript="https://cdn.jwplayer.com/libraries/zu9ZTlIy.js"
        file={data.coverVideoUrl}
      />
    </>
  );
};

export default StoryVideo;
