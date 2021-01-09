import React, { Fragment, useState, useEffect } from "react";
import { useSubscription, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography, Button, List } from "@material-ui/core";
import IndeterminateLoader from "../IndeterminateLoader";
import TodoItem from "./TodoItem";

const TodoPublicList = (props) => {
  const [state, setState] = useState({
    olderTodosAvailable: props.latestTodo ? true : false,
    newTodosCount: 0,
    error: false,
    todos: [],
  });

  let numTodos = state.todos.length;
  let oldestTodoId = numTodos
    ? state.todos[numTodos - 1].id
    : props.latestTodo
    ? props.latestTodo.id + 1
    : 0;
  let newestTodoId = numTodos
    ? state.todos[0].id
    : props.latestTodo
    ? props.latestTodo.id
    : 0;

  const client = useApolloClient();

  useEffect(() => {
    loadOlder();
  }, []);

  useEffect(() => {
    if (props.latestTodo && props.latestTodo.id > newestTodoId) {
      setState((prevState) => {
        return { ...prevState, newTodosCount: prevState.newTodosCount + 1 };
      });
      newestTodoId = props.latestTodo.id;
    }
  }, [props.latestTodo]);

  const loadOlder = async () => {
    const GET_OLD_PUBLIC_TODOS = gql`
      query getOldPublicTodos($oldestTodoId: Int!) {
        todos(
          where: { is_public: { _eq: true }, id: { _lt: $oldestTodoId } }
          limit: 7
          order_by: { created_at: desc }
        ) {
          id
          title
          created_at
          is_completed
          user {
            name
          }
        }
      }
    `;

    const { error, data } = await client.query({
      query: GET_OLD_PUBLIC_TODOS,
      variables: { oldestTodoId: oldestTodoId },
    });

    if (data.todos.length) {
      setState((prevState) => {
        return { ...prevState, todos: [...prevState.todos, ...data.todos] };
      });
      oldestTodoId = data.todos[data.todos.length - 1].id;
    } else {
      setState((prevState) => {
        return { ...prevState, olderTodosAvailable: false };
      });
    }
    if (error) {
      console.error(error);
      setState((prevState) => {
        return { ...prevState, error: true };
      });
    }
  };

  const loadNew = async () => {
    const GET_NEW_PUBLIC_TODOS = gql`
      query getNewPublicTodos($latestVisibleId: Int) {
        todos(
          where: { is_public: { _eq: true }, id: { _gt: $latestVisibleId } }
          order_by: { created_at: desc }
        ) {
          id
          title
          created_at
          is_completed
          user {
            name
          }
        }
      }
    `;

    const { error, data } = await client.query({
      query: GET_NEW_PUBLIC_TODOS,
      variables: {
        latestVisibleId: state.todos.length ? state.todos[0].id : null,
      },
    });

    if (data) {
      setState((prevState) => {
        return {
          ...prevState,
          todos: [...data.todos, ...prevState.todos],
          newTodosCount: 0,
        };
      });
      newestTodoId = data.todos[0].id;
    }
    if (error) {
      console.error(error);
      setState((prevState) => {
        return { ...prevState, error: true };
      });
    }
  };

  return (
    <>
      {state.newTodosCount !== 0 && (
        <Button onClick={loadNew}>
          New todos have arrived! ({state.newTodosCount.toString()})
        </Button>
      )}

      <List>
        {state.todos &&
          state.todos.map((todo, index) => {
            return <TodoItem key={index} index={index} todo={todo} />;
          })}
      </List>

      <Button onClick={loadOlder}>
        {state.olderTodosAvailable
          ? "Load older todos"
          : "No more public todos!"}
      </Button>
    </>
  );
};

// Run a subscription to get the latest public todo
const NOTIFY_NEW_PUBLIC_TODOS = gql`
  subscription notifyNewPublicTodos {
    todos(
      where: { is_public: { _eq: true } }
      limit: 1
      order_by: { created_at: desc }
    ) {
      id
      created_at
      is_completed
    }
  }
`;

const TodoPublicListSubscription = () => {
  const { loading, error, data } = useSubscription(NOTIFY_NEW_PUBLIC_TODOS);
  if (loading) {
    return <IndeterminateLoader />;
  }
  if (error) {
    return <Typography>Error {JSON.stringify(error)}</Typography>;
  }
  return (
    <TodoPublicList latestTodo={data.todos.length ? data.todos[0] : null} />
  );
};
export default TodoPublicListSubscription;
