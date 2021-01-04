import * as React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} className={classes.appBar} position="sticky">
      <Toolbar>
        <Link href="/" passHref>
          <Button>Todos</Button>
        </Link>
        <Link href="/products" passHref>
          <Button>Products</Button>
        </Link>
        <Link href="/users" passHref>
          <Button>Users</Button>
        </Link>
        <Link href="/about" passHref>
          <Button>About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
