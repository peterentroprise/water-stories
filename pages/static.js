import Link from "../components/Link";

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

const Static = (props) => {
  return (
    <Container maxWidth="sm">
      <Box mt={3} mb={1}>
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
      </Box>
    </Container>
  );
};

export default Static;
