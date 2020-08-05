import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import ReactJWPlayer from "react-jw-player";

import { fade, makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
} from "@material-ui/core";

const API_ENDPOINT = "https://api.entroprise.com/v1/graphql";

const graphQLClient = new GraphQLClient(API_ENDPOINT, {
  headers: {
    "x-hasura-access-key": "supersecret",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    maxWidth: 480,
  },
  appBar: {
    flexGrow: 1,
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(2),
  },
}));

const ResultPage = () => {
  const router = useRouter();
  const classes = useStyles();
  const { id } = router.query;

  const itemQuery = `{
    item_by_pk(id: "${id}") {
      answer
      content
      id
      question
    }
  }`;

  const { data: item_by_pk, error } = useSWR(itemQuery, (query) =>
    graphQLClient.request(query)
  );

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="default" position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.backButton}
              color="inherit"
              aria-label="back"
              onClick={() => router.back()}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Content Page
            </Typography>
          </Toolbar>
        </AppBar>
        {item_by_pk && (
          <>
            <ReactJWPlayer
              playerId="retrieve-player"
              playerScript="https://cdn.jwplayer.com/libraries/ParpSc0m.js"
              file={item_by_pk.item_by_pk.content}
              isAutoPlay
            />
            <div className={classes.content}>
              <Box pt={2} pb={1}>
                <Typography variant="caption">Question: </Typography>
                <Typography variant="body1">
                  {item_by_pk.item_by_pk.question}
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="caption">Answer: </Typography>
                <Typography variant="body1">
                  {item_by_pk.item_by_pk.answer}
                </Typography>
              </Box>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default ResultPage;
