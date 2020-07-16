import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {},
}));

const PopperComponent = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();

  return (
    <>
      <Popper
        open={open}
        onClose={handleClick}
        anchorEl={anchorEl}
        placement="right-end"
      >
        <Paper className={classes.paper}>
          {children}
          <Button onClick={handleClick}>Close</Button>
        </Paper>
      </Popper>
    </>
  );
};

export default PopperComponent;
