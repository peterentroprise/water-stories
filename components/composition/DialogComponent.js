import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },
}));

const DialogComponent = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        BackdropProps={{
          classes: {
            root: classes.root,
          },
        }}
        onClose={handleClick}
        aria-labelledby="dialog"
        open={open}
      >
        <DialogTitle id="dialog">Ask Question</DialogTitle>
        {children}
      </Dialog>
    </>
  );
};

export default DialogComponent;
