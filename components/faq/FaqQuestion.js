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

const API_ENDPOINT = "https://api.entroprise.com/v1/graphql";

const faqQuery = `{
  item {
    answer
    content
    id
    question
  }
}`;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  root: {
    width: 480,
    height: 640,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
  },
  actions: { paddingRight: 0 },
}));

const askEndpoint = "https://prediction.entroprise.com/models/1/doc-qa-dpr";
const faqEndpoint = "https://haystack.entroprise.com/item/askquestion";

const askQuestion = async (payload) => {
  const response = await fetch(askEndpoint, {
    method: "POST",
    mode: "cors",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};

const askFaqQuestion = async (payload) => {
  const response = await fetch(faqEndpoint, {
    method: "POST",
    mode: "cors",
    withCredentials: true,
    headers: {
      "x-api-key": "dd74decc-8825-4a49-b9bc-e4608249d612",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};

const FaqQuestion = ({ handleClick }) => {
  const classes = useStyles();

  const [question, setQuestion] = useState("");
  const [top_k_reader, set_top_k_reader] = useState(10);
  const [top_k_retriever, set_top_k_retriever] = useState(10);

  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [faqAnswer, setFaqAnswer] = useState();
  const [faqLoading, setFaqLoading] = useState(false);
  const [faqSuccess, setFaqSuccess] = useState(false);

  const handleAskQuestion = async () => {
    if (question == "") {
      console.log("TODO throw validation error for null string");
    } else {
      handleAskDocumentQuestion();
      handleAskFaqQuestion();
    }
  };

  const handleAskDocumentQuestion = async () => {
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

  const handleAskFaqQuestion = async () => {
    const payload = {
      question: question,
    };
    setFaqLoading(true);
    setFaqSuccess(false);
    const response = await askFaqQuestion(payload);
    setFaqLoading(false);
    setFaqSuccess(true);
    setFaqAnswer(response);
  };

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const graphQLClient = new GraphQLClient(API_ENDPOINT, {
    headers: {
      "x-hasura-access-key": "supersecret",
    },
  });

  const { data: item, error } = useSWR(faqQuery, (query) =>
    graphQLClient.request(query)
  );

  if (!item) return <></>;
  return (
    <>
      {console.log({ item, error })}
      <div className={classes.root}>
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
            options={item.item.map((option) => option.question)}
            renderInput={(params) => (
              <TextField
                {...params}
                value={question}
                onChange={handleChangeQuestion}
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

        {answer && (
          <>
            <Divider />
            <List disablePadding>
              <ListItem disableGutters alignItems="flex-start">
                <ListItemText
                  primary={`AI Answer: ${answer.results[0].answers[0].answer}`}
                  secondary={`Context: ${answer.results[0].answers[0].context}`}
                />
              </ListItem>
              <ListItem disableGutters alignItems="flex-start">
                <ListItemText
                  primary={`Probability: ${
                    answer.results[0].answers[0].probability * 100
                  }`}
                  secondary={`Score: ${
                    answer.results[0].answers[0].score * 100
                  }`}
                />
              </ListItem>
              <ListItem disableGutters alignItems="flex-start">
                <ListItemText
                  primary={`Document: ${answer.results[0].answers[0].meta.name}`}
                  secondary={`Location: ${answer.results[0].answers[0].offset_start_in_doc} - ${answer.results[0].answers[0].offset_end_in_doc}`}
                />
              </ListItem>
            </List>
          </>
        )}
      </div>
      {loading && <LinearProgress className={classes.buttonProgress} />}
    </>
  );
};

export default FaqQuestion;
