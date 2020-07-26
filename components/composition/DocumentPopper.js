import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  popper: {
    width: "calc(100% - 4px);",
    paddingLeft: 8,
    paddingRight: 8,
    maxWidth: 512,
  },
}));

const DocumentPopper = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();

  return (
    <>
      <Popper
        className={classes.popper}
        id="search-popper"
        placement="bottom-start"
        open={open}
        onClose={handleClick}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>{children}</Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default DocumentPopper;
