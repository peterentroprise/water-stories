import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const FlagStateDisplay = ({ featureName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>The {featureName} feature is not enabled.</Typography>
    </div>
  );
};

export default FlagStateDisplay;
