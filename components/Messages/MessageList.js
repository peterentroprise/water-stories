import React, { Fragment, useState, useEffect, createRef } from "react";
import { useSubscription, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, Button } from "@material-ui/core";
import { Waypoint } from "react-waypoint";

import IndeterminateLoader from "../IndeterminateLoader";
import MessageItem from "./MessageItem";
import LoadMoreItem from "./LoadMoreItem";

const useStyles = makeStyles((theme) => ({
  list: {
    height: "calc(100vh - 168px)",
    overflow: "auto",
  },
}));

const MessageList = ({ thread, latestMessage }) => {
  const classes = useStyles();
  const client = useApolloClient();
  let listScrollRef = createRef();
  const [state, setState] = useState({
    olderMessagesAvailable: latestMessage ? true : false,
    newMessagesCount: 0,
    error: false,
    messages: [],
  });

  let numMessages = state.messages.length;

  let oldestMessageId = numMessages
    ? state.messages[numMessages - 1].id
    : latestMessage
    ? latestMessage.id + 1
    : 0;

  let newestMessageId = numMessages
    ? state.messages[0].id
    : latestMessage
    ? latestMessage.id
    : 0;

  useEffect(() => {
    loadOlder(thread);
  }, []);

  useEffect(() => {
    if (listScrollRef.current) {
      listScrollRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [state.messages]);

  useEffect(() => {
    if (latestMessage && latestMessage.id > newestMessageId) {
      setState((prevState) => {
        return {
          ...prevState,
          newMessagesCount: prevState.newMessagesCount + 1,
        };
      });
      newestMessageId = latestMessage.id;
      loadNew(thread);
    }
  }, [latestMessage]);

  const loadOlder = async (thread) => {
    const GET_OLD_MESSAGES = gql`
      query getOldMessages($thread_id: Int, $oldestMessageId: Int!) {
        messages(
          where: {
            thread_id: { _eq: $thread_id }
            id: { _lt: $oldestMessageId }
          }
          limit: 20
          order_by: { created_at: desc }
        ) {
          id
          body

          created_at
          user {
            name
          }
        }
      }
    `;

    const { error, data } = await client.query({
      query: GET_OLD_MESSAGES,
      variables: { thread_id: thread.id, oldestMessageId: oldestMessageId },
    });

    if (data.messages.length) {
      setState((prevState) => {
        return {
          ...prevState,
          messages: [...prevState.messages, ...data.messages],
        };
      });
      oldestMessageId = data.messages[data.messages.length - 1].id;
    } else {
      setState((prevState) => {
        return { ...prevState, olderMessagesAvailable: false };
      });
    }
    if (error) {
      setState((prevState) => {
        return { ...prevState, error: true };
      });
    }
  };

  const loadNew = async (thread) => {
    const GET_NEW_MESSAGES = gql`
      query getNewMessages($thread_id: Int, $latestVisibleId: Int) {
        messages(
          where: {
            thread_id: { _eq: $thread_id }
            id: { _gt: $latestVisibleId }
          }
          order_by: { created_at: desc }
        ) {
          id
          body
          thread_id
          user {
            name
          }
        }
      }
    `;

    const { error, data } = await client.query({
      query: GET_NEW_MESSAGES,
      variables: {
        thread_id: thread.id,
        latestVisibleId: state.messages.length ? state.messages[0].id : null,
      },
    });

    if (data) {
      setState((prevState) => {
        return {
          ...prevState,
          messages: [...data.messages, ...prevState.messages],
          newMessagesCount: 0,
        };
      });
      newestMessageId = data.messages[0].id;
    }
    if (error) {
      setState((prevState) => {
        return { ...prevState, error: true };
      });
    }
  };
  const handleLoad = () => {
    loadOlder(thread);
  };

  return (
    <div className={classes.list}>
      {/* <Waypoint onEnter={handleLoad} /> */}
      {state.olderTodosAvailable && <LoadMoreItem handleLoad={handleLoad} />}
      <List className="message-list">
        {state.messages &&
          state.messages
            .map((message, index) => {
              return (
                <MessageItem
                  className="message"
                  key={index}
                  index={index}
                  message={message}
                />
              );
            })
            .reverse()}
        <div ref={listScrollRef} />
      </List>
    </div>
  );
};

const NOTIFY_NEW_MESSAGES = gql`
  subscription notifyNewMessages($thread_id: Int) {
    messages(
      where: { thread_id: { _eq: $thread_id } }
      limit: 1
      order_by: { created_at: desc }
    ) {
      id
      created_at
    }
  }
`;

const MessageListSubscription = ({ thread }) => {
  const { loading, error, data } = useSubscription(NOTIFY_NEW_MESSAGES, {
    variables: { thread_id: thread.id },
  });

  if (loading) {
    return <IndeterminateLoader />;
  }
  if (error) {
    return <Typography>Error {JSON.stringify(error)}</Typography>;
  }
  return (
    <MessageList
      thread={thread}
      latestMessage={data.messages.length ? data.messages[0] : null}
    />
  );
};
export default MessageListSubscription;
