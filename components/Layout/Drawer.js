import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Link from "../Link";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const navTo = (href) => {
    router.push(href);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        className={classes.menuButton}
        edge="start"
        color="default"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer}>
        <List className={classes.list}>
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
          <ListItem
            onClick={() => {
              navTo("/users");
              toggleDrawer();
            }}
            button
          >
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
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
        <List className={classes.list}>
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
        </List>
      </Drawer>
    </>
  );
}
