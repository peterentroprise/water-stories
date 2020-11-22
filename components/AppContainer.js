import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import FilterHdrOutlinedIcon from "@material-ui/icons/FilterHdrOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilState, useRecoilValue } from "recoil";

import { globalExpansionState } from "../components/states";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 96,
  },
}));

const AppFab = (props) => {
  const { children } = props;
  const classes = useStyles();

  const [globalExpansion, setGlobalExpansion] = useRecoilState(
    globalExpansionState
  );

  if (globalExpansion)
    return (
      <Container disableGutters className={classes.container} maxWidth="sm">
        <Box mt={3} mb={1}>
          {children}
        </Box>
      </Container>
    );

  return <></>;
};

export default AppFab;
