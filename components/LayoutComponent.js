import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import AppTopBar from "../components/AppTopBar";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const AppFab = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters maxWidth="sm">
      <Box>
        <AppTopBar />
        {children}
      </Box>
    </Container>
  );
};

export default AppFab;
