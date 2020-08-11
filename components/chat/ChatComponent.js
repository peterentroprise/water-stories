import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChatFab from "./ChatFab";
import ChatPopover from "./ChatPopover";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ChatComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setPlacement("bottom");
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <ChatFab open={open} handleClick={handleClick} />
      <ChatPopover open={open} anchorEl={anchorEl} handleClick={handleClick} />
    </>
  );
};

export default ChatComponent;
