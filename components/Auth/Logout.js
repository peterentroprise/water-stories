import React from "react";
import Router from "next/router";
import Button from "@material-ui/core/Button";

import Link from "../Link";

const LogoutBtn = ({ logoutHandler }) => (
  <Link href="/api/logout" passHref>
    <Button variant="contained" color="secondary">
      Log Out
    </Button>
  </Link>
);

export default LogoutBtn;
