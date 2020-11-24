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
    [theme.breakpoints.up("sm")]: {
      maxWidth: 384,
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    height: 640,
    position: "fixed",
    bottom: theme.spacing(0),
    right: theme.spacing(0),
  },
}));

const AppFab = (props) => {
  const { children } = props;
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  const [globalExpansion, setGlobalExpansion] = useRecoilState(
    globalExpansionState
  );

  return (
    <Container disableGutters className={classes.container} maxWidth="sm">
      <Box>
        <AppTopBar />
        {children}
      </Box>
    </Container>
  );
};

export default AppFab;
