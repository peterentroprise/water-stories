import Link from "../components/Link";
import AppContainer from "../components/AppContainer";
import { useUser } from "../utils/auth/useUser";

import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
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

const useStyles = makeStyles((theme) => ({
  card: {
    height: "80vh",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
}));

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

const Threads = () => {
  const { user, logout } = useUser();
  const classes = useStyles();

  const [globalExpansion, SetGlobalExpansion] = useRecoilState(
    globalExpansionState
  );
  const [name, setName] = useRecoilState(nameState);
  const charName = useRecoilValue(charState);

  const { data } = useSWR(`/api/threads/`, fetcher);

  if (!data) {
    return "Loading...";
  }

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
            <Link href={"/"}>Home</Link>
          </Box>
          <Box mt={2} mb={1}>
            <Typography variant="h4" component="h1" gutterBottom>
              Threads
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
              {data.map((doc) => (
                <Link href={`/thread/${doc.id}`}>{doc.data.name}</Link>
              ))}
            </List>
            {console.log(data)}
          </Box>
        </CardContent>
      </Card>
    </AppContainer>
  );
};

export default Threads;
