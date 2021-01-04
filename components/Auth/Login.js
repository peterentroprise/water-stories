import Router from "next/router";
import {
  Typography,
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

import Link from "../Link";

const Login = () => {
  return (
    <Box mt={2} mb={1}>
      <Card variant="outlined">
        <CardHeader
          title="Entroprise"
          subheader="Merging the finite with the infinite."
        />
        <CardContent>
          <Typography>Please login to continue</Typography>
          <Box mt={2} mb={1}>
            <Link href="/api/login" passHref>
              <Button variant="outlined" color="primary">
                Log In
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
