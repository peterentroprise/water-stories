import React from "react";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Container,
  Divider,
  Button,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Link,
  TextField,
  IconButton,
  LinearProgress,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  root: {
    width: "100%",
    // height: "100vh",
    position: "relative",
    // maxWidth: 480,
    // height: 480,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
  actions: { paddingRight: 0 },
}));

const ChatBody = ({ documentAnswer, faqAnswer }) => {
  const classes = useStyles();

  return (
    <>
      {faqAnswer && (
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay"
            frameBorder="0"
            allowFullScreen="1"
            src={`${faqAnswer.answers[0].meta.content}?autoplay=1&mute=1`}
          />
        </div>
      )}
      <div className={classes.root}>
        {faqAnswer && (
          <List disablePadding>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary={`FAQ Answer: ${faqAnswer.answers[0].answer}`}
                secondary={`Confidence Score: ${faqAnswer.answers[0].score} `}
              />
            </ListItem>
          </List>
        )}

        {documentAnswer && (
          <>
            <Divider />
            <List disablePadding>
              <ListItem disableGutters alignItems="flex-start">
                <ListItemText
                  primary={`AI Answer: ${documentAnswer.results[0].answers[0].answer}`}
                  secondary={`Context: ${documentAnswer.results[0].answers[0].context}`}
                />
              </ListItem>
            </List>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBody;
