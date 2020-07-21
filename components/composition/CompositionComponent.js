import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FabComponent from "./FabComponent";
import PopperComponent from "./PopperComponent";
import DialogComponent from "./DialogComponent";
import BodyComponent from "./BodyComponent";
import DocumentQuestion from "./DocumentQuestion";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CompositionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={classes.root}>
      <FabComponent handleClick={handleClick} />
      <DialogComponent
        id={id}
        open={open}
        handleClick={handleClick}
        anchorEl={anchorEl}
      >
        <DocumentQuestion />
      </DialogComponent>
    </div>
  );
};

export default CompositionComponent;
