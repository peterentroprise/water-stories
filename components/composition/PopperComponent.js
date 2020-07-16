import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {},
}));

const PopperComponent = ({
  open,
  handleClick,
  anchorEl,
  children,
  placement,
}) => {
  const classes = useStyles();

  return (
    <>
      <Popper
        open={open}
        onClose={handleClick}
        anchorEl={anchorEl}
        placement={placement}
      >
        <Paper className={classes.paper}>
          {children}
          <Box p={2} mt={2} mb={1}>
            <Button variant="contained" disableElevation onClick={handleClick}>
              Close
            </Button>
          </Box>
        </Paper>
      </Popper>
    </>
  );
};

export default PopperComponent;
