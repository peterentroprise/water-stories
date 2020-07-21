import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Fab } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    top: theme.spacing(1.5),
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const FabComponent = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      color="primary"
      size="medium"
      aria-label="askquestion"
      className={classes.fab}
      onClick={handleClick}
    >
      <HelpOutlineOutlinedIcon className={classes.extendedIcon} />
      Ask Question
    </Fab>
  );
};

export default FabComponent;
