import Router from "next/router";
import { Button, Typography } from "@material-ui/core";

import Link from "../Link";

const Login = () => {
  return (
    <div>
      <Typography>Welcome to Entroprise</Typography>
      <Typography>Please login to continue</Typography>
      <Link href="/api/login" passHref>
        <Button variant="contained" color="secondary">
          Log In
        </Button>
      </Link>
    </div>
  );
};

export default Login;
