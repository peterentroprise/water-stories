import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFlags } from "@happykit/flags";

import { useFetchUser } from "../../lib/user";
import IndeterminateLoader from "../IndeterminateLoader";
import FlagStateDisplay from "../FlagStateDisplay";
import Login from "../Auth/Login";
import RequestsList from "./RequestsList";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const RequestsWrapper = ({ requests }) => {
  const classes = useStyles();
  const { user, loading } = useFetchUser();
  const flags = useFlags();

  if (loading) {
    return <IndeterminateLoader />;
  }
  if (!flags.requests) {
    return <FlagStateDisplay featureName="requests" />;
  }
  return (
    <div className={classes.wrapper}>
      <RequestsList requests={requests} />
    </div>
  );
};

export default RequestsWrapper;
