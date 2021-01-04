/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {
  Typography,
  Checkbox,
  Avatar,
  Button,
  ButtonGroup,
  DraftsIcon,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

const TodoFilters = ({
  todos,
  currentFilter,
  filterResultsFn,
  clearCompletedFn,
}) => {
  const filterResultsHandler = (filter) => {
    return () => {
      filterResultsFn(filter);
    };
  };

  const activeTodos = todos.filter((todo) => todo.is_completed !== true);

  let itemCount = todos.length;
  if (currentFilter === "active") {
    itemCount = activeTodos.length;
  } else if (currentFilter === "completed") {
    itemCount = todos.length - activeTodos.length;
  }

  return (
    <>
      <Typography>
        {itemCount} Todo
        {itemCount !== 1 ? "s" : ""}
      </Typography>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={filterResultsHandler("all")}>All</Button>
        <Button onClick={filterResultsHandler("active")}>Active</Button>
        <Button onClick={filterResultsHandler("completed")}>Completed</Button>
      </ButtonGroup>
      <Button onClick={clearCompletedFn}>Clear Completed</Button>
    </>
  );
};

export default TodoFilters;
