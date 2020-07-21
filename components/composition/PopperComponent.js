import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  popper: { width: "calc(100% - 32px);", maxWidth: 512 },
}));

const PopperComponent = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();

  return (
    <>
      <Popper
        keepMounted
        open={open}
        onClose={handleClick}
        anchorEl={anchorEl}
        placement="top"
        className={classes.popper}
        // modifiers={{
        //   flip: {
        //     enabled: true,
        //   },
        //   // preventOverflow: {
        //   //   enabled: true,
        //   //   boundariesElement: "scrollParent",
        //   // },
        // }}
      >
        <Paper className={classes.paper}>{children}</Paper>
      </Popper>
    </>
  );
};

export default PopperComponent;
