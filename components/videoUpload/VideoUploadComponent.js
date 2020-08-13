import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import UploadButton from "./UploadButton";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const VideUploadComponent = () => {
  const classes = useStyles();

  return (
    <>
      <UploadButton />
    </>
  );
};

export default VideUploadComponent;
