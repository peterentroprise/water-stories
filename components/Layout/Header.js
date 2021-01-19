import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { useFlags } from "@happykit/flags";

import Link from "../Link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {},
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

const HeaderComponent = ({ title, handleDrawerToggle }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp implementation="css">
          <IconButton
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            edge="start"
            color="default"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

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
  );
};

export default HeaderComponent;
