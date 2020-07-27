import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FaqFab from "./FaqFab";
import FaqDialog from "./FaqDialog";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const FaqComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setPlacement("bottom");
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <FaqFab open={open} handleClick={handleClick} />
      <FaqDialog open={open} handleClick={handleClick} />
    </div>
  );
};

export default FaqComponent;
