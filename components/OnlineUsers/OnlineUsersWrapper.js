import React, { useEffect, Fragment, useState } from "react";
import { useMutation, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography } from "@material-ui/core";

import IndeterminateLoader from "../IndeterminateLoader";
import OnlineUser from "./OnlineUser";

const onlineUsersSubscription = gql`
  subscription getOnlineUsers {
    online_users(order_by: { user: { name: asc } }) {
      id
      user {
        name
      }
    }
  }
`;

const OnlineUsersWrapper = () => {
  const [onlineIndicator, setOnlineIndicator] = useState(0);
  const [values, setValues] = useState({});
  let onlineUsersList;

  useEffect(() => {
    // Every 30s, run a mutation to tell the backend that you're online
    updateLastSeen();
    setOnlineIndicator(setInterval(() => updateLastSeen(), 30000));

    return () => {
      // Clean up
      clearInterval(onlineIndicator);
    };
  }, []);

  const UPDATE_LASTSEEN_MUTATION = gql`
    mutation updateLastSeen($now: timestamptz!) {
      update_users(where: {}, _set: { last_seen: $now }) {
        affected_rows
      }
    }
  `;
  const [updateLastSeenMutation] = useMutation(UPDATE_LASTSEEN_MUTATION);

  const updateLastSeen = () => {
    // Use the apollo client to run a mutation to update the last_seen value
    updateLastSeenMutation({
      variables: { now: new Date().toISOString() },
    });
  };

  const { loading, error, data } = useSubscription(onlineUsersSubscription);
  if (loading) {
    return <IndeterminateLoader />;
  }
  if (error) {
    return <Typography>Error!</Typography>;
  }
  if (data) {
    onlineUsersList = data.online_users.map((u) => (
      <OnlineUser key={u.id} user={u.user} />
    ));
  }

  return (
    <>
      <Typography>Number Of Users Online: {onlineUsersList.length}</Typography>
      {onlineUsersList}
    </>
  );
};

export default OnlineUsersWrapper;
