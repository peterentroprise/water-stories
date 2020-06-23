import useSWR from "swr";
import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import CompositionComponent from "../components/composition/CompositionComponent";

import {
  Card,
  CardContent,
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
            <CompositionComponent data={data} />
          </CardContent>
        </Card>
      </Box>

      <Box mt={2} mb={3}>
        <Card variant="outlined">
          <CardContent>
            {error && <div>Error loading data.</div>}
            {loading && <div>Loading data ...</div>}
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
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
