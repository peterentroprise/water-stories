import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FaqBody from "./FaqBody";

const useStyles = makeStyles((theme) => ({
  dialog: {},
}));

const FaqDialog = ({ open, handleClick, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Dialog
        className={classes.dialog}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClick}
        transition
      >
        <FaqBody handleClick={handleClick} />
      </Dialog>
    </>
  );
};

export default FaqDialog;
