import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import useSWR from "swr";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  globalExpansionState,
  nameState,
  charState,
} from "../components/states";

import AppFab from "../components/AppFab";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const useStyles = makeStyles((theme) => ({
  root: {},
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

  if (!user && globalExpansion) {
    return (
      <Container maxWidth="sm">
        <Box mt={3} mb={1}>
          <p> You are not signed in. </p>
          <Link href={"/auth"}>
            <p>Sign in</p>
          </Link>
        </Box>
      </Container>
    );
  }

  if (user && globalExpansion) {
    return (
      <Container maxWidth="sm">
        <Box mt={3} mb={1}>
          <p>Index</p>
          <p>You're signed in. Email: {user.email}</p>
          <p
            style={{
              display: "inline-block",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => logout()}
          >
            Log out
          </p>
          <div>
            <Link href={"/static"}>
              <p>Static Page</p>
            </Link>
          </div>
          {error && <div>Failed to fetch food!</div>}
          {data && !error ? (
            <div>Your favorite food is {data.food}.</div>
          ) : (
            <div>Loading...</div>
          )}
        </Box>
      </Container>
    );
  }

  return (
    <>
      <AppFab />
    </>
  );
};

export default Index;
