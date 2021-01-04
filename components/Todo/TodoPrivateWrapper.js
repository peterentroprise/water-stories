import React from "react";

import TodoInput from "./TodoInput";
import TodoPrivateList from "./TodoPrivateList";

const TodoPrivateWrapper = (props) => {
  return (
    <div>
      <div>Personal todos</div>
      <TodoInput />
      <TodoPrivateList />
    </div>
  );
};

export default TodoPrivateWrapper;
