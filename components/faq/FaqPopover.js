import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FaqQuestion from "./FaqQuestion";

const useStyles = makeStyles((theme) => ({
  dialog: {},
}));

const FaqPopover = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        onClose={handleClick}
        anchorPosition={{ top: 24, left: 24 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <FaqQuestion handleClick={handleClick} />
      </Popover>
    </>
  );
};

export default FaqPopover;