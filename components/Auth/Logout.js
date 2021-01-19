import React from "react";
import Router from "next/router";
import { Button, Box } from "@material-ui/core";

import Link from "../Link";

const LogoutBtn = () => (
  <Box mt={2}>
    <Link href="/api/logout" passHref>
      <Button color="primary" variant="contained" disableElevation>
        Log Out
      </Button>
    </Link>
  </Box>
);

export default LogoutBtn;
