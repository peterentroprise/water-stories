import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LinearProgress from "@material-ui/core/LinearProgress";

import FaqAppBar from "./FaqAppBar";
import FaqResponse from "./FaqResponse";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,
    height: 480,
  },
}));

const FaqPopover = ({ open, handleClick, anchorEl, children }) => {
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
        anchorReference="anchorPosition"
        onClose={handleClick}
        anchorPosition={{ top: 16, left: 16 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className={classes.root}>
          <FaqAppBar
            handleClick={handleClick}
            handleSetDocumentAnswer={handleSetDocumentAnswer}
            handleSetFaqAnswer={handleSetFaqAnswer}
            handleSetDocumentLoading={handleSetDocumentLoading}
          />
          {loading && <LinearProgress className={classes.progress} />}
          <FaqResponse documentAnswer={documentAnswer} faqAnswer={faqAnswer} />
        </div>
      </Popover>
    </>
  );
};

export default FaqPopover;
