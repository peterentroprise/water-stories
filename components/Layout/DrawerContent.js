import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFlags } from "@happykit/flags";

import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  MenuIcon,
  Drawer,
  Button,
  List,
  Divider,
  ListItemIcon,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
} from "@material-ui/core";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FlightTakeoffOutlinedIcon from "@material-ui/icons/FlightTakeoffOutlined";

import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(3),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const router = useRouter();
  const flags = useFlags();
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const navTo = (href) => {
    router.push(href);
  };

  return (
    <>
      <Toolbar>
        <Avatar
          src="/images/transparentLogo.png"
          variant="square"
          className={classes.logo}
        />
        <Typography variant="h6" className={classes.title}>
          Water Stories
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          onClick={() => {
            navTo("/");
            toggleDrawer();
          }}
          button
        >
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
          onClick={() => {
            navTo("/launch");
            toggleDrawer();
          }}
          button
        >
          <ListItemIcon>
            <FlightTakeoffOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Launch" />
        </ListItem>
        {flags.stories && (
          <ListItem
            onClick={() => {
              navTo("/stories");
              toggleDrawer();
            }}
            button
          >
            <ListItemIcon>
              <RecentActorsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Stories" />
          </ListItem>
        )}
      </List>

      {flags.threads && (
        <>
          <Divider />
          <List>
            <ListItem
              onClick={() => {
                navTo("/threads");
                toggleDrawer();
              }}
              button
            >
              <ListItemIcon>
                <ListOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Threads" />
            </ListItem>
          </List>
        </>
      )}

      <ListItem
        onClick={() => {
          navTo("/users");
          toggleDrawer();
        }}
        button
      >
        <ListItemIcon>
          <PeopleOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem
        onClick={() => {
          navTo("/graph");
          toggleDrawer();
        }}
        button
      >
        <ListItemIcon>
          <BubbleChartOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Graph" />
      </ListItem>

      <Divider />
      <List>
        <ListItem
          onClick={() => {
            navTo("/account");
            toggleDrawer();
          }}
          button
        >
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
    </>
  );
}
