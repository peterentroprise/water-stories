import React from "react";

import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";

const TodoPublicWrapper = () => {
  return (
    <>
      <TodoInput isPublic />
      <TodoPublicList />
    </>
  );
};

export default TodoPublicWrapper;
