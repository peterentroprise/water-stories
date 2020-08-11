import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Container } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ChatInputBar from "./ChatInputBar";
import ChatBody from "./ChatBody";

const useStyles = makeStyles((theme) => ({
  popover: {},
  root: {
    // minWidth: 320,
    // maxWidth: 480,
    // maxHeight: "40vh",
    // minHeight: 384,
    // width: "100%",
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

  const handleClose = () => {
    setDocumentAnswer("");
    setFaqAnswer("");
    handleClick();
  };

  const handleSetDocumentLoading = (value) => {
    setLoading(value);
  };

  return (
    <Popover
      className={classes.popover}
      id={id}
      open={open}
      PaperProps={{
        style: {
          maxWidth: 480,
          width: "calc(100% - 32px)",
          maxHeight: 320,
        },
      }}
      // PaperProps={
      //   (fullScreen && {
      //     style: {
      //       maxWidth: 480,
      //       width: "calc(100% - 32px)",
      //       height: "100%",
      //     },
      //   }) || {
      //     style: {
      //       maxWidth: 480,
      //       // width: "100%",
      //       width: "calc(100% - 32px)",
      //       // height: "100%",
      //     },
      //   }
      // }
      anchorReference="anchorPosition"
      onClose={handleClose}
      anchorPosition={{ top: 16, left: 16 }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      modifiers={{
        flip: {
          enabled: false,
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: "scrollParent",
        },
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
  );
};

export default ChatPopover;
