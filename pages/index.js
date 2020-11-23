import Link from "../components/Link";
import AppContainer from "../components/AppContainer";
import { useUser } from "../utils/auth/useUser";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import useSWR from "swr";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  globalExpansionState,
  nameState,
  charState,
} from "../components/states";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100vh",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
}));

const Index = () => {
  const { user, logout } = useUser();
  const classes = useStyles();

  const [globalExpansion, SetGlobalExpansion] = useRecoilState(
    globalExpansionState
  );
  const [name, setName] = useRecoilState(nameState);
  const charName = useRecoilValue(charState);

  const { data, error } = useSWR(
    user ? ["/api/getFood", user.token] : null,
    fetcher
  );

  if (!user) {
    return (
      <AppContainer>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Box mt={2} mb={1}>
              <Link href={"/auth"}>Sign in</Link>
            </Box>
            <Box mt={2} mb={1}>
              <Typography variant="h4" component="h1" gutterBottom>
                Entroprise
              </Typography>
              <Typography>You are not signed in.</Typography>
            </Box>
          </CardContent>
        </Card>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Box mt={2} mb={1}>
            <Link href={"/static"}>Static Page</Link>
          </Box>
          <Box mt={2} mb={1}>
            <Typography variant="h4" component="h1" gutterBottom>
              Entroprise
            </Typography>
            <Typography>You're signed in. Email: {user.email}</Typography>
            <Button variant="outlined" onClick={() => logout()}>
              Log out
            </Button>

            {error && <Typography>Failed to fetch food!</Typography>}
            {data && !error ? (
              <Typography>Your favorite food is {data.food}.</Typography>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </AppContainer>
  );
};

export default Index;
