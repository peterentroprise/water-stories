import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FilterHdrOutlinedIcon from "@material-ui/icons/FilterHdrOutlined";
import { useRecoilState, useRecoilValue } from "recoil";

import { globalExpansionState } from "../components/states";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
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

  const toggleExpansion = () => {
    setGlobalExpansion(!globalExpansion);
  };

  return (
    <Fab
      className={classes.margin}
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
