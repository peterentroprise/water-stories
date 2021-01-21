import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NewThread from "./NewThread";

const useStyles = makeStyles((theme) => ({
  appBar: {
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
  title: {
    flexGrow: 1,
  },
}));

const ThreadToolbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="textPrimary"
            component="div"
          >
            Threads Toolbar
          </Typography>
          <NewThread />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ThreadToolbar;
