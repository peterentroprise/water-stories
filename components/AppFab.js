import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FilterHdrOutlinedIcon from "@material-ui/icons/FilterHdrOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilState, useRecoilValue } from "recoil";

import { globalExpansionState } from "../components/states";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(0),
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AppFab = () => {
  const classes = useStyles();

  const [globalExpansion, setGlobalExpansion] = useRecoilState(
    globalExpansionState
  );

  useEffect(() => {
    setGlobalExpansion(JSON.parse(localStorage.getItem("GLOBAL_EXPANSION")));
  }, [setGlobalExpansion]);

  useEffect(() => {
    localStorage.setItem("GLOBAL_EXPANSION", JSON.stringify(globalExpansion));
  }, [globalExpansion]);

  const toggleExpansion = () => {
    setGlobalExpansion(!globalExpansion);
  };

  if (globalExpansion)
    return (
      <Fab
        className={classes.fab}
        variant="extended"
        aria-label="add"
        onClick={toggleExpansion}
      >
        <CloseIcon className={classes.extendedIcon} />
        Close
      </Fab>
    );

  return (
    <Fab
      className={classes.fab}
      variant="extended"
      color="primary"
      aria-label="add"
      onClick={toggleExpansion}
    >
      <FilterHdrOutlinedIcon className={classes.extendedIcon} />
      Take Me There
    </Fab>
  );
};

export default AppFab;
