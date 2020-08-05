import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ChatInputBar from "./ChatInputBar";
import ChatBody from "./ChatBody";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    maxWidth: 480,
    maxHeight: "40vh",
    width: "100%",
  },
}));

const ChatPopover = ({ open, handleClick, anchorEl, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const id = open ? "simple-popover" : undefined;

  const [documentAnswer, setDocumentAnswer] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetDocumentAnswer = (value) => {
    setDocumentAnswer(value);
  };

  const handleSetFaqAnswer = (value) => {
    setFaqAnswer(value);
  };

  const handleSetDocumentLoading = (value) => {
    setLoading(value);
  };

  return (
    <>
      <Popover
        id={id}
        open={open}
        // PaperProps={{ style: { width: "100%" } }}
        anchorReference="anchorPosition"
        onClose={handleClick}
        anchorPosition={{ top: 16, left: 16 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className={classes.root}>
          <ChatBody documentAnswer={documentAnswer} faqAnswer={faqAnswer} />
          <ChatInputBar
            handleClick={handleClick}
            handleSetDocumentAnswer={handleSetDocumentAnswer}
            handleSetFaqAnswer={handleSetFaqAnswer}
            handleSetDocumentLoading={handleSetDocumentLoading}
            loading={loading}
          />
        </div>
      </Popover>
    </>
  );
};

export default ChatPopover;
