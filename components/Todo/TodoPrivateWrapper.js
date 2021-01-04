import React from "react";

import TodoInput from "./TodoInput";
import TodoPrivateList from "./TodoPrivateList";

const TodoPrivateWrapper = (props) => {
  return (
    <>
      <TodoInput />
      <TodoPrivateList />
    </>
  );
};

export default TodoPrivateWrapper;
