import React from "react";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Typography,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  secondary: {
    textOverflow: "hidden",
  },
  root: {
    width: "100%",
    // height: "100vh",
    position: "relative",
    // maxWidth: 480,
    // height: 480,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingTop: 8,
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
      {faqAnswer && (
        <List>
          {faqAnswer.answers.map((object, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemText
                primary={`${object.score.toFixed(2) * 100}% - ${
                  object.meta.question
                }`}
                secondary={object.answer}
              />
            </ListItem>
          ))}
        </List>
      )}
      {documentAnswer && (
        <>
          <Divider />
          <List>
            {console.log(documentAnswer)}
            {documentAnswer.results.map((result, index) => (
              <List key={index}>
                {result.answers.map((object, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                      primary={`${object.probability.toFixed(2) * 100}% - ${
                        object.answer
                      }`}
                      secondary={
                        <Typography
                          noWrap
                          variant="body2"
                          color="textSecondary"
                        >
                          {object.context}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ))}
          </List>
        </>
      )}
      {/* {documentAnswer && (
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
      )} */}
    </>
  );
};

export default ChatBody;
