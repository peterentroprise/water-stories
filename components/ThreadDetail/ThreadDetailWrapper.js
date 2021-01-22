import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFlags } from "@happykit/flags";

import { useFetchUser } from "../../lib/user";
import IndeterminateLoader from "../IndeterminateLoader";
import FlagStateDisplay from "../FlagStateDisplay";
import Login from "../Auth/Login";
import ThreadDetailToolbar from "./ThreadDetailToolbar";
import MessagesWrapper from "../Messages/MessagesWrapper";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const ThreadDetailWrapper = (item) => {
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
      <ThreadDetailToolbar thread={item.item} />
      <MessagesWrapper thread={item.item} />
    </div>
  );
};

export default ThreadDetailWrapper;
