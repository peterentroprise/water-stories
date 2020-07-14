import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";
// import CompositionComponent from "../components/composition/CompositionComponent";

import clsx from "clsx";

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
import { makeStyles } from "@material-ui/core/styles";

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
  },
  wrapper: {
    position: "relative",
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
const Index = () => {
  const { user, logout } = useUser();
  const classes = useStyles();
  const [question, setQuestion] = useState("How is the virus spreading?");
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

  if (!user) {
    return (
      <>
        <Container maxWidth="sm">
          <Box mt={3} mb={1}>
            <Card variant="outlined">
              <CardContent>
                <Box mt={2} mb={1}>
                  <Typography variant="h4">Entroprise</Typography>
                </Box>
                <Box mt={2} mb={1}>
                  <Typography>You are not signed in. </Typography>
                </Box>
                <Box mt={2} mb={1}>
                  <Link href={"/auth"}>Sign in</Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box mt={3} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <Box mt={2} mb={1}>
              <Link href={"/static"}>Static Page</Link>
            </Box>
            <Box mt={2} mb={1}>
              <Typography variant="h4" component="h1" gutterBottom>
                Entroprise SSR
              </Typography>
            </Box>
            <Box mt={2} mb={1}>
              <Typography>You're signed in. Email: {user.email}</Typography>
            </Box>
            <Box mt={2} mb={1}>
              <Button
                disableElevation
                variant="contained"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box mt={2} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <TextField
              id="question"
              label="Question"
              variant="filled"
              value={question}
              onChange={handleChangeQuestion}
              fullWidth
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
            {answer && (
              <List disablePadding>
                <ListItem disableGutters alignItems="flex-start">
                  <ListItemText
                    primary={
                      (answer.answers[0].meta.question &&
                        answer.answers[0].meta.question) ||
                      "Not Available"
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {`Answer: `}
                        </Typography>
                        {answer.answers[0].answer}
                      </>
                    }
                  />
                </ListItem>
                <ListItem disableGutters alignItems="flex-start">
                  <ListItemText
                    primary="Metadata"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {`Score: ${answer.answers[0].score} `}
                        </Typography>
                        <a href={answer.answers[0].meta.link}>
                          {` ${answer.answers[0].meta.source}`}
                        </a>
                      </>
                    }
                  />
                </ListItem>
              </List>
            )}

            {/* <CompositionComponent/> */}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
