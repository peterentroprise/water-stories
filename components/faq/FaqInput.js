/* eslint-disable no-use-before-define */
import React, { useState } from "react";

import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  autoComplete: { marginTop: theme.spacing(1) },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
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

const FaqInput = ({
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
    handleAskDocumentQuestion();
    handleAskFaqQuestion();
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
        className={{ marginNormal: classes.autoComplete }}
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
          <>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                {...params}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={question}
                onChange={handleChangeQuestion}
                required
                placeholder="Ask Question"
                margin="none"
                variant="outlined"
                autoFocus
                fullWidth
                onKeyDown={(e) => {
                  if (e.keyCode === 13 && e.target.value) {
                    handleAskQuestion();
                  }
                }}
              />
            </div>
          </>
        )}
      />
    </div>
  );
};

export default FaqInput;
