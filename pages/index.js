import useSWR from "swr";
import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import {
  Container,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListSubheader,
} from "@material-ui/core";

const GET_QUESTIONS = gql`
  query MyQuery {
    question {
      id
      question
    }
    answer {
      id
      answer
    }
  }
`;

// const fetcher = (url, token) =>
//   fetch(url, {
//     method: "GET",
//     headers: new Headers({ "Content-Type": "application/json", token }),
//     credentials: "same-origin",
//   }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  // const { data, error } = useSWR(
  //   user ? ["/api/getFood", user.token] : null,
  //   fetcher
  // );
  const { loading, error, data } = useQuery(GET_QUESTIONS);

  if (!user) {
    return (
      <>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography>Hi there!</Typography>
            <Typography>You are not signed in. </Typography>
          </Box>
          <Box my={4}>
            <Link href={"/auth"}>Sign in</Link>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Link href={"/static"}>Static Page</Link>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Entroprise SSR
        </Typography>
        <Typography>You're signed in. Email: {user.email}</Typography>
      </Box>
      <Box my={4}>
        <Button onClick={() => logout()}>Log out</Button>
      </Box>
      <Box my={4}>
        {error && <div>Error loading data.</div>}
        {loading && <div>Loading data ...</div>}
        <List
          subheader={
            <ListSubheader component="div" id="questions">
              Questions
            </ListSubheader>
          }
        >
          {data.question.map((item) => (
            <ListItem key={item.id}>{item.question}</ListItem>
          ))}
        </List>
        <List
          subheader={
            <ListSubheader component="div" id="answers">
              Answers
            </ListSubheader>
          }
        >
          {data.answer.map((item) => (
            <ListItem key={item.id}>{item.answer}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
