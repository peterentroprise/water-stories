import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { fade, makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
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
    <>
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
              src={`${item_by_pk.item_by_pk.content}?autoplay=1&mute=1`}
            />
          </div>
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
    </>
  );
};

export default ResultPage;
