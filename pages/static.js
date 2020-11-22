import Link from "../components/Link";
import AppContainer from "../components/AppContainer"

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

const Static = (props) => {
  return (
    <AppContainer>
        <Card variant="outlined">
          <CardContent>
            <Box mt={2} mb={1}>
              <Link href={"/"}>Home</Link>
            </Box>
            <Box mt={2} mb={1}>
              <Typography variant="h4" component="h1" gutterBottom>
                Entroprise Static
              </Typography>
              <Typography>
                This page is static because it does not fetch any data or
                include the authed user info.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        </AppContainer>
  );
};

export default Static;
