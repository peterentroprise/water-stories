import React from "react";
import { Typography } from "@material-ui/core";

import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";

const TodoPublicWrapper = () => {
  return (
    <>
      <Typography variant="h4">Public Todos</Typography>
      <TodoInput isPublic />
      <TodoPublicList />
    </>
  );
};

export default TodoPublicWrapper;
