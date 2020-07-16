import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FabComponent from "./FabComponent";
import PopperComponent from "./PopperComponent";
import BodyComponent from "./BodyComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CompositionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState("right-end");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={classes.root}>
      <FabComponent handleClick={handleClick} />
      <PopperComponent
        id={id}
        open={open}
        handleClick={handleClick}
        anchorEl={anchorEl}
        placement={placement}
      >
        <BodyComponent />
      </PopperComponent>
    </div>
  );
};

export default CompositionComponent;
