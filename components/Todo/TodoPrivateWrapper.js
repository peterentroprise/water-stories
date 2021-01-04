import React from "react";
import { Typography } from "@material-ui/core";

import TodoInput from "./TodoInput";
import TodoPrivateList from "./TodoPrivateList";

const TodoPrivateWrapper = (props) => {
  return (
    <>
      <Typography variant="h4">Private Todos</Typography>
      <TodoInput />
      <TodoPrivateList />
    </>
  );
};

export default TodoPrivateWrapper;
