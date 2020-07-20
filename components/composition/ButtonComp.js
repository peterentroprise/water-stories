import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {},
}));

const ButtonComp = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mx="auto">
        <Button
          variant="contained"
          color="primary"
          aria-label="askquestion"
          className={classes.button}
          onClick={handleClick}
        >
          <HelpOutlineOutlinedIcon className={classes.extendedIcon} />
          Ask Document Question
        </Button>
      </Box>
    </div>
  );
};

export default ButtonComp;
