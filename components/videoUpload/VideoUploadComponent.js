import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import UploadButton from "./UploadButton";
import VideoUploads from "./VideoUploads";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const VideUploadComponent = () => {
  const classes = useStyles();

  return (
    <>
      {/* <UploadButton /> */}
      <VideoUploads />
    </>
  );
};

export default VideUploadComponent;
