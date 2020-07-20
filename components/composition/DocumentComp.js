import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ButtonComp from "./ButtonComp";
import PopperComponent from "./PopperComponent";
import BodyComponent from "./BodyComponent";
import DocumentQuestion from "./DocumentQuestion";
import FabComponent from "./FabComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const DocoumentComp = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setPlacement("bottom");
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
        <DocumentQuestion />
      </PopperComponent>
    </div>
  );
};

export default DocoumentComp;
