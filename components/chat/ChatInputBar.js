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
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ChatInput from "./ChatInput";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  menuButton: {
    marginRight: theme.spacing(0),
  },

  accountButton: {
    marginLeft: theme.spacing(0),
  },

  input: {
    flexGrow: 1,
  },
}));

const ChatInputBar = ({
  handleSetFaqAnswer,
  handleSetDocumentAnswer,
  handleSetDocumentLoading,
  loading,
  handleClick,
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="default" position="sticky">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleClick}
        >
          <CancelOutlinedIcon />
        </IconButton>
        <div className={classes.input}>
          <ChatInput
            handleSetDocumentLoading={handleSetDocumentLoading}
            handleSetDocumentAnswer={handleSetDocumentAnswer}
            handleSetFaqAnswer={handleSetFaqAnswer}
          />
        </div>

        <IconButton
          edge="end"
          className={classes.accountButton}
          color="inherit"
          aria-label="open drawer"
          href="/auth"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Toolbar>
      {loading && <LinearProgress />}
    </AppBar>
  );
};

export default ChatInputBar;
