import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FaqQuestion from "./FaqQuestion";
import FaqAppBar from "./FaqAppBar";
import FaqResponse from "./FaqResponse";

const useStyles = makeStyles((theme) => ({
  dialog: {},
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
        anchorPosition={{ top: 64, left: 16 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <FaqAppBar
          handleSetDocumentAnswer={handleSetDocumentAnswer}
          handleSetFaqAnswer={handleSetFaqAnswer}
          handleSetDocumentLoading={handleSetDocumentLoading}
          loading={loading}
        />
        <FaqResponse documentAnswer={documentAnswer} faqAnswer={faqAnswer} />
      </Popover>
    </>
  );
};

export default FaqPopover;
