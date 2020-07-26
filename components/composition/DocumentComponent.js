import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import DocumentPopper from "./DocumentPopper";
import DocumentQuestion from "./DocumentQuestion";
import DocumentFab from "./DocumentFab";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const DocoumentComp = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setPlacement("bottom");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={classes.root}>
      <DocumentFab open={open} handleClick={handleClick} />
      <DocumentPopper
        id={id}
        open={open}
        handleClick={handleClick}
        anchorEl={anchorEl}
        placement={placement}
      >
        <DocumentQuestion />
      </DocumentPopper>
    </div>
  );
};

export default DocoumentComp;
