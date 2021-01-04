import React from "react";

import TodoInput from "./TodoInput";
import TodoPublicList from "./TodoPublicList";

const TodoPublicWrapper = () => {
  return (
    <div>
      <div>Public feed (realtime)</div>

      <TodoInput isPublic />
      <TodoPublicList />
    </div>
  );
};

export default TodoPublicWrapper;
