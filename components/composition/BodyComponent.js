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

const askEndpoint = "https://haystack.entroprise.com/item/askquestion";

const askQuestion = async (payload) => {
  const response = await fetch(askEndpoint, {
    method: "POST",
    withCredentials: true,
    headers: {
      "x-api-key": "dd74decc-8825-4a49-b9bc-e4608249d612",
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

const BodyComponent = () => {
  const classes = useStyles();

  const [question, setQuestion] = useState("How do I make experimental jigs?");
  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = async () => {
    const payload = {
      question: question,
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
        />
        <Box mt={2} mb={1}>
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <Button
                color="primary"
                disableElevation
                variant="contained"
                onClick={handleAskQuestion}
                disabled={loading}
              >
                Ask Question
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
                primary={
                  (answer.answers[0].meta.question &&
                    answer.answers[0].meta.question) ||
                  "Not Available"
                }
                secondary={answer.answers[0].answer}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary="Answer Meta"
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
                    <a href={answer.answers[0].meta.content}>Link to Content</a>
                  </>
                }
              />
            </ListItem>
          </List>
        )}
      </Box>
    </div>
  );
};

export default BodyComponent;
