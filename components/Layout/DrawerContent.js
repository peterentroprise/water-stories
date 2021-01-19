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
} from "@material-ui/core";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
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
      <div className={classes.toolbar} />
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
      <Divider />
      <List>
        {flags.threads && (
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
      </List>
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
