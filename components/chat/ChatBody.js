import React from "react";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import ReactJWPlayer from "react-jw-player";

import Link from "../Link";

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
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
  },
  actions: { paddingRight: 0 },
}));

const ChatBody = ({ documentAnswer, faqAnswer }) => {
  const classes = useStyles();

  const href = "/result/219";

  const CustomLink = React.useMemo(
    (href) =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} href={href} {...linkProps} />
      )),
    [href]
  );

  return (
    <>
      {faqAnswer && (
        <ReactJWPlayer
          playerId="retrieve-player"
          playerScript="https://cdn.jwplayer.com/libraries/ParpSc0m.js"
          file={faqAnswer.answers[0].meta.content}
          isAutoPlay
        />
        // <div
        //   className="video"
        //   style={{
        //     position: "relative",
        //     paddingBottom: "56.25%" /* 16:9 */,
        //     paddingTop: 25,
        //     height: 0,
        //   }}
        // >
        //   <iframe
        //     style={{
        //       position: "absolute",
        //       top: 0,
        //       left: 0,
        //       width: "100%",
        //       height: "100%",
        //     }}
        //     allow="autoplay"
        //     frameBorder="0"
        //     allowFullScreen="1"
        //     src={`${faqAnswer.answers[0].meta.content}?autoplay=1&mute=1`}
        //   />
        // </div>
      )}
      {faqAnswer && (
        <List>
          {console.log(faqAnswer)}
          {faqAnswer.answers.map((object, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              button
              component={CustomLink}
              href={`/result/${object.meta.id}`}
            >
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
    </>
  );
};

export default ChatBody;
