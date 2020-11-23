import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import FilterHdrOutlinedIcon from "@material-ui/icons/FilterHdrOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilState, useRecoilValue } from "recoil";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppTopBar from "../components/AppTopBar";

import { globalExpansionState } from "../components/states";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      maxWidth: 384,
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      height: "calc(100vh - 64px)",
    },
    position: "fixed",
    top: 0,
    right: 0,
  },
}));

const AppFab = (props) => {
  const { children } = props;
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  const [globalExpansion, setGlobalExpansion] = useRecoilState(
    globalExpansionState
  );

  if (globalExpansion)
    return (
      <Container
        data-iframe-height
        fixed
        disableGutters
        className={classes.container}
        maxWidth="sm"
      >
        <Box mt={3} mb={1}>
          <AppTopBar />
          {children}
        </Box>
      </Container>
    );

  return <></>;
};

export default AppFab;
