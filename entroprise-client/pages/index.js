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
} from "@material-ui/core";

const GET_QUESTIONS = gql`
  query MyQuery {
    questions {
      id
      question
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
        <Typography>Hi there!</Typography>
        <Typography>You are not signed in. </Typography>
        <Link href={"/auth"}>Sign in</Link>
      </>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Link href={"/static"}>Static Page</Link>
        <Typography variant="h4" component="h1" gutterBottom>
          Entroprise SSR
        </Typography>
        <Typography>You're signed in. Email: {user.email}</Typography>
        <Button onClick={() => logout()}>Log out</Button>

        {error && <div>Error loading data.</div>}
        {loading && <div>Loading data ...</div>}
        <List>
          {console.log("apolloData", data)}
          {data.questions.map((item) => (
            <ListItem key={item.id}>{item.question}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
