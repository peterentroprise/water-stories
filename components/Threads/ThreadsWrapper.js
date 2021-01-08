import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ThreadInput from "./ThreadInput";
import ThreadList from "./ThreadList";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const ThreadsWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ThreadList />
      <ThreadInput />
    </div>
  );
};

export default ThreadsWrapper;
