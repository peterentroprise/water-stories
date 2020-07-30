import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Fab } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 16,
    paddingTop: 16,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    boxShadow: "none",
  },
  fabOpen: {
    boxShadow: "none",
  },
}));

const FaqFab = ({ handleClick, open }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {(open && (
        <Fab
          variant="extended"
          color="default"
          size="medium"
          aria-label="askquestion"
          className={classes.fabOpen}
          onClick={handleClick}
        >
          <CancelOutlinedIcon className={classes.extendedIcon} />
          Close
        </Fab>
      )) || (
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
      )}
    </div>
  );
};

export default FaqFab;
