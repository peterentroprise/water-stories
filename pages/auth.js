import dynamic from "next/dynamic";

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

const Auth = () => {
  return (
    <AppContainer>
      <Card variant="outlined">
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
