import React, { Fragment, useState, useEffect } from "react";
import { useSubscription, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography, List } from "@material-ui/core";

import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => {
  return (
    <>
      <List>
        {messages &&
          messages.map((message, index) => {
            return <MessageItem key={index} message={message} />;
          })}
      </List>
    </>
  );
};

// Run a subscription to get the latest public todo
const GET_MESSAGES = gql`
  subscription getMessages {
    messages(order_by: { created_at: desc }) {
      created_at
      body
      id
      user {
        name
      }
    }
  }
`;

const MessageListSubscription = () => {
  const { loading, error, data } = useSubscription(GET_MESSAGES);
  if (loading) {
    return <Typography>Loading...</Typography>;
  }
  if (error) {
    return <Typography>Error {JSON.stringify(error)}</Typography>;
  }
  return <MessageList messages={data.messages} />;
};
export default MessageListSubscription;
