import Link from "../components/Link";

import { Container, Box, Typography } from "@material-ui/core";

const Static = (props) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Link href={"/"}>Home</Link>
        <Typography variant="h4" component="h1" gutterBottom>
          Entroprise Static
        </Typography>
        <Typography>
          This page is static because it does not fetch any data or include the
          authed user info.
        </Typography>
      </Box>
    </Container>
  );
};

export default Static;
