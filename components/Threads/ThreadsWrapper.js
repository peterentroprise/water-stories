import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFlags } from "@happykit/flags";

import { useFetchUser } from "../../lib/user";
import IndeterminateLoader from "../IndeterminateLoader";
import FlagStateDisplay from "../FlagStateDisplay";
import Login from "../Auth/Login";
import ThreadToolbar from "./ThreadToolbar";
import ThreadList from "./ThreadList";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const ThreadsWrapper = () => {
  const classes = useStyles();
  const { user, loading } = useFetchUser();
  const flags = useFlags();

  if (loading) {
    return <IndeterminateLoader />;
  }
  if (!flags.threads) {
    return <FlagStateDisplay featureName="threads" />;
  }
  if (!user) {
    return <Login />;
  }
  return (
    <div className={classes.wrapper}>
      <ThreadToolbar />
      <ThreadList />
    </div>
  );
};

export default ThreadsWrapper;
