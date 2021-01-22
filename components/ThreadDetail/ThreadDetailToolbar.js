import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import RenameThread from "./RenameThread";
import DeleteThread from "./DeleteThread";

import { drawerWidth } from "../Layout/Core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: theme.palette.background.paper,
    top: 56,
    position: "fixed",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

const ThreadDetailToolbar = ({ thread }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <RenameThread thread={thread} />
          <div className={classes.grow} />
          <DeleteThread thread={thread} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ThreadDetailToolbar;
