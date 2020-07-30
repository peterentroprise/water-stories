import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FaqInput from "./FaqInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  accountButton: {
    marginLeft: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
}));

const FaqAppBar = ({ handleSetFaqAnswer, handleSetDocumentAnswer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.root}>
            <FaqInput
              handleSetDocumentAnswer={handleSetDocumentAnswer}
              handleSetFaqAnswer={handleSetFaqAnswer}
            />
          </div>

          <IconButton
            edge="end"
            className={classes.accountButton}
            color="inherit"
            aria-label="open drawer"
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FaqAppBar;
