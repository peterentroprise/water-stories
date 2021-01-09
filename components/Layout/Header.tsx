import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Link from "../Link";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  accountButton: {
    marginLeft: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appBar} position="sticky">
        <Toolbar>
          <Drawer />
          <div className={classes.grow} />
          <Link href="/" passHref>
            <Typography variant="h6" color="textPrimary" component="div">
              Entroprise
            </Typography>
          </Link>

          <div className={classes.grow} />
          <Link href="/users" passHref>
            <IconButton
              className={classes.accountButton}
              edge="end"
              color="default"
              aria-label="open account"
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderComponent;
