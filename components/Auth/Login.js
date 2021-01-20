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
        <CardHeader title="Authentication Required" />
        <CardContent>
          <Typography>Please login To continue.</Typography>
          <Box mt={2} mb={1}>
            <Link href="/api/login" passHref>
              <Button elevation={0} variant="contained" color="primary">
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
