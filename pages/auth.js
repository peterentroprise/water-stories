import dynamic from "next/dynamic";

import { Container, Box } from "@material-ui/core";

const FirebaseAuth = dynamic(() => import("../components/FirebaseAuth"), {
  ssr: false,
});

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
