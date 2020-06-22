import FirebaseAuth from "../components/FirebaseAuth";

import { Container, Box } from "@material-ui/core";

const Auth = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <FirebaseAuth />
      </Box>
    </Container>
  );
};

export default Auth;
