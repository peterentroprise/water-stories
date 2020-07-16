import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FabComponent = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="askquestion"
        className={classes.margin}
        onClick={handleClick}
      >
        <HelpOutlineOutlinedIcon className={classes.extendedIcon} />
        Ask Question
      </Fab>
    </div>
  );
};

export default FabComponent;
