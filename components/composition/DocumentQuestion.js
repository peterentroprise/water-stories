import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  CircularProgress,
} from "@material-ui/core";

import { useState } from "react";

const askEndpoint = "https://prediction.entroprise.com/models/1/doc-qa";

const askQuestion = async (payload) => {
  const response = await fetch(askEndpoint, {
    method: "POST",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 320,
  },
  wrapper: {
    position: "relative",
  },
  textField: {
    width: 320 - theme.spacing(4),
  },
  buttonProgress: {
    color: theme.palette.primary,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const DocumentQuestion = () => {
  const classes = useStyles();

  const [question, setQuestion] = useState("How do I oil the machine?");
  const [top_k_reader, set_top_k_reader] = useState(1);
  const [top_k_retriever, set_top_k_retriever] = useState(1);
  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = async () => {
    const payload = {
      questions: [question],
      top_k_reader: top_k_reader,
      top_k_retriever: top_k_retriever,
    };
    setLoading(true);
    setSuccess(false);
    const response = await askQuestion(payload);
    setLoading(false);
    setSuccess(true);
    setAnswer(response);
  };

  return (
    <div className={classes.root}>
      <Box p={2} mt={2} mb={1}>
        <TextField
          className={classes.textField}
          id="question"
          label="Question"
          variant="filled"
          value={question}
          onChange={handleChangeQuestion}
          autoFocus
        />
        <Box mt={2} mb={1}>
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <Button
                type="submit"
                color="primary"
                disableElevation
                variant="contained"
                onClick={handleAskQuestion}
                disabled={loading}
              >
                Submit
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </div>
        </Box>
        {console.log(answer)}
        {answer && (
          <List disablePadding>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Answer"
                secondary={answer.results[0].answers[0].answer}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Context"
                secondary={answer.results[0].answers[0].context}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Probability Answer is Correct"
                secondary={answer.results[0].answers[0].probability * 100}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Document Name"
                secondary={answer.results[0].answers[0].meta.name}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Location in Document"
                secondary={`${answer.results[0].answers[0].offset_start_in_doc} - ${answer.results[0].answers[0].offset_end_in_doc}`}
              />
            </ListItem>

            {/* <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Answer Metadata"
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {`Confidence Score: ${answer.answers[0].score} `}
                    </Typography>
                    <a target="_blank" href={answer.answers[0].meta.content}>
                      Link to Content
                    </a>
                    <iframe
                      allow="autoplay"
                      frameBorder="0"
                      allowFullScreen="1"
                      src={`${answer.answers[0].meta.content}?autoplay=1&mute=1&origin=https://entroprise.com`}
                      width="288"
                    ></iframe>
                  </>
                }
              />
            </ListItem> */}
          </List>
        )}
      </Box>
    </div>
  );
};

export default DocumentQuestion;
