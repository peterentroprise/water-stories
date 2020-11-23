import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

import AppContainer from "../components/AppContainer";
import Link from "../components/Link";

const FirebaseAuth = dynamic(() => import("../components/FirebaseAuth"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  card: {
    height: "80vh",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
}));

const Auth = () => {
  const classes = useStyles();
  return (
    <AppContainer>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Box mt={2} mb={1}>
            <Link href={"/"}>Root</Link>
          </Box>
          <Box mt={2} mb={1}>
            <Typography variant="h4" component="h1" gutterBottom>
              Entroprise
            </Typography>
            <FirebaseAuth />
          </Box>
        </CardContent>
      </Card>
    </AppContainer>
  );
};

export default Auth;
