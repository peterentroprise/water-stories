import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const CompositionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
};

export default CompositionComponent;
