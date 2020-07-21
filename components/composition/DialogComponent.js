import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {},
  backdrop: {
    backgroundColor: "transparent",
  },
}));

const DialogComponent = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dialog
        className={classes.root}
        BackdropProps={{
          classes: {
            root: classes.backdrop,
          },
        }}
        // fullScreen
        onClose={handleClick}
        aria-labelledby="dialog"
        open={open}
      >
        <DialogTitle id="dialog">Ask Question</DialogTitle>
        {children}
      </Dialog>
    </div>
  );
};

export default DialogComponent;
