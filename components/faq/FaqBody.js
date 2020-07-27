import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  TextField,
  IconButton,
  LinearProgress,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import { useState } from "react";

const askEndpoint = "https://prediction.entroprise.com/models/1/doc-qa-dpr";
const faqEndpoint = "https://prediction.entroprise.com/models/1/doc-qa-dpr";

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

const suggestedQueries = [
  { question: "Who created the Dothraki vocabulary?" },
  { question: "Who is the father of Arya Stark?" },
  { question: "Who is the sister of Sansa?" },
];

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  root: { minWidth: 360, minHeight: 360 },
  actions: { paddingRight: 0 },
  buttonProgress: {
    // color: theme.palette.primary,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // marginTop: -12,
    // marginLeft: -12,
  },
}));

const FaqBody = ({ handleClick }) => {
  const classes = useStyles();

  const [question, setQuestion] = useState("");
  const [top_k_reader, set_top_k_reader] = useState(10);
  const [top_k_retriever, set_top_k_retriever] = useState(10);
  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    <>
      <DialogContent className={classes.root}>
        <form noValidate autoComplete="off">
          <Autocomplete
            freeSolo
            autoFocus
            clearOnBlur
            selectOnFocus
            id="autocomplete-search"
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setQuestion(newValue);
              } else if (newValue && newValue.inputValue) {
                setQuestion(newValue.inputValue);
              } else {
                setQuestion(newValue);
              }
            }}
            value={question}
            options={suggestedQueries.map((option) => option.question)}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                placeholder="Ask Question"
                margin="normal"
                variant="outlined"
                autoFocus
                fullWidth
              />
            )}
          />
        </form>

        <DialogActions className={classes.actions}>
          <Button variant="outlined" onClick={handleClick}>
            Close
          </Button>
          <Button
            onClick={handleAskQuestion}
            type="submit"
            disableElevation
            variant="contained"
            color="primary"
          >
            Submit Question
          </Button>
        </DialogActions>
        {answer && (
          <List disablePadding>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary={`Answer: ${answer.results[0].answers[0].answer}`}
                secondary={`Context: ${answer.results[0].answers[0].context}`}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary={`Probability: ${
                  answer.results[0].answers[0].probability * 100
                }`}
                secondary={`Score: ${answer.results[0].answers[0].score * 100}`}
              />
            </ListItem>
            <ListItem disableGutters alignItems="flex-start">
              <ListItemText
                primary={`Document: ${answer.results[0].answers[0].meta.name}`}
                secondary={`Location: ${answer.results[0].answers[0].offset_start_in_doc} - ${answer.results[0].answers[0].offset_end_in_doc}`}
              />
            </ListItem>
            {/* <iframe
              allow="autoplay"
              frameBorder="0"
              allowFullScreen="1"
              src={`${answer.answers[0].meta.content}?autoplay=1&mute=1&origin=https://entroprise.com`}
              width="288"
            ></iframe> */}

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
      </DialogContent>
      {loading && <LinearProgress className={classes.buttonProgress} />}
    </>
  );
};

export default FaqBody;
