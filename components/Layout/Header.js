import * as React from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { useFlags } from "@happykit/flags";

import { useFetchUser } from "../../lib/user";
import Link from "../Link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
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
  title: {},
  small: {
    marginLeft: theme.spacing(3.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const HeaderComponent = ({ title, handleDrawerToggle, backUrl }) => {
  const classes = useStyles();
  const { user, loading } = useFetchUser();
  const router = useRouter();

  return (
    <AppBar elevation={0} className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolbar}>
        {!backUrl && (
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
        )}
        {backUrl && (
          <IconButton
            onClick={() => router.push(backUrl)}
            className={classes.menuButton}
            edge="start"
            color="default"
            aria-label="menu"
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        )}

        <div className={classes.grow} />
        <Typography
          className={classes.title}
          variant="h6"
          color="textPrimary"
          component="div"
        >
          {title}
        </Typography>

        <div className={classes.grow} />
        <Link href="/account" passHref>
          {(user && (
            <Avatar
              alt={user.name}
              src={user.picture}
              className={classes.small}
            />
          )) || (
            <IconButton
              className={classes.accountButton}
              edge="end"
              color="default"
              aria-label="open account"
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          )}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
