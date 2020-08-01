/* eslint-disable no-use-before-define */
import React, { useState } from "react";

import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  autoComplete: { marginTop: theme.spacing(1) },
}));

const API_ENDPOINT = "https://api.entroprise.com/v1/graphql";

const faqQuery = `{
  item {
    answer
    content
    id
    question
  }
}`;

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

const ChatInput = ({
  handleSetFaqAnswer,
  handleSetDocumentAnswer,
  handleSetDocumentLoading,
}) => {
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [top_k_reader, set_top_k_reader] = useState(10);
  const [top_k_retriever, set_top_k_retriever] = useState(10);

  const [success, setSuccess] = useState(false);

  const [faqLoading, setFaqLoading] = useState(false);
  const [faqSuccess, setFaqSuccess] = useState(false);

  const handleAskQuestion = async () => {
    if (!question == "") {
      handleAskDocumentQuestion();
      handleAskFaqQuestion();
    } else {
      console.log("TODO - throw null string validation error");
    }
  };

  const handleAskDocumentQuestion = async () => {
    const payload = {
      questions: [question],
      top_k_reader: top_k_reader,
      top_k_retriever: top_k_retriever,
    };
    handleSetDocumentLoading(true);
    setSuccess(false);
    const response = await askQuestion(payload);
    handleSetDocumentLoading(false);
    setSuccess(true);
    handleSetDocumentAnswer(response);
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
    handleSetFaqAnswer(response);
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
    <div className={classes.root}>
      <Autocomplete
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        blurOnSelect
        openOnFocus
        autoFocus
        autoComplete
        freeSolo
        fullWidth
        onClose={(event, newValue) => {
          handleAskQuestion();
        }}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setQuestion(newValue);
          } else if (newValue && newValue.inputValue) {
            setQuestion(newValue.inputValue);
          } else {
            setQuestion(newValue);
          }
        }}
        options={item.item.map((option) => option.question)}
        value={question}
        renderInput={(params) => (
          <>
            <div className={classes.root}>
              <InputBase
                {...params}
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                className={classes.input}
                value={question}
                onChange={handleChangeQuestion}
                required
                placeholder="Ask Question"
                margin="none"
                variant="outlined"
                fullWidth
                autoFocus
                onKeyDown={(e) => {
                  if (e.keyCode === 13 && e.target.value) {
                    handleAskQuestion();
                  }
                }}
              />
              <IconButton
                type="submit"
                color="primary"
                className={classes.iconButton}
                aria-label="search"
                onClick={handleAskQuestion}
              >
                <SearchIcon />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
            </div>
          </>
        )}
      />
    </div>
  );
};

export default ChatInput;
