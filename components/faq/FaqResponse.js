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
    height: "100%",
    maxWidth: 480,
    maxHeight: 560,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
  actions: { paddingRight: 0 },
}));

const FaqResponse = ({ documentAnswer, faqAnswer }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {console.log(faqAnswer)}
        {faqAnswer && (
          <List disablePadding>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary={`FAQ Answer: ${faqAnswer.answers[0].answer}`}
                secondary={`Confidence Score: ${faqAnswer.answers[0].score} `}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="FAQ Answer Content"
                secondary={
                  <>
                    <iframe
                      allow="autoplay"
                      frameBorder="0"
                      allowFullScreen="1"
                      src={`${faqAnswer.answers[0].meta.content}?autoplay=1&mute=1&origin=https://entroprise.com`}
                      width="288"
                    ></iframe>
                  </>
                }
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
              <ListItem disableGutters alignItems="flex-start">
                <ListItemText
                  primary={`Probability: ${
                    documentAnswer.results[0].answers[0].probability * 100
                  }`}
                  secondary={`Score: ${
                    documentAnswer.results[0].answers[0].score * 100
                  }`}
                />
              </ListItem>
              <ListItem disableGutters alignItems="flex-start">
                <ListItemText
                  primary={`Document: ${documentAnswer.results[0].answers[0].meta.name}`}
                  secondary={`Location: ${documentAnswer.results[0].answers[0].offset_start_in_doc} - ${documentAnswer.results[0].answers[0].offset_end_in_doc}`}
                />
              </ListItem>
            </List>
          </>
        )}
      </div>
    </>
  );
};

export default FaqResponse;
