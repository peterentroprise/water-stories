import { Container, Box, Typography, Button } from "@material-ui/core";
import ReactJWPlayer from "react-jw-player";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../Link";
import MailChimpForm from "./MailChimpForm";

const useStyles = makeStyles((theme) => ({
  player: {
    width: "100%",
  },
}));

const VideoSection = () => {
  const classes = useStyles();
  return (
    <>
      <ReactJWPlayer
        className={classes.player}
        playerId="story-video"
        playerScript="https://cdn.jwplayer.com/libraries/zu9ZTlIy.js"
        file="https://content.jwplatform.com/videos/M8LPoR6p-nh7Mumxo.mp4"
      />
    </>
  );
};

export default VideoSection;
