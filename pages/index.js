import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";

import DocumentComponent from "../components/composition/DocumentComponent";

import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 3000,
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    color: theme.palette.primary,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));
const Index = () => {
  const { user, logout } = useUser();
  const classes = useStyles();

  if (!user) {
    return (
      <div className={classes.root}>
        <DocumentComponent />
        {/* <Container maxWidth="sm">
          <Box mt={3} mb={1}>
            <Card variant="outlined">
              <CardContent>
                <Box mt={2} mb={1}>
                  <Typography variant="h4">Entroprise</Typography>
                </Box>
                <Box mt={2} mb={1}>
                  <Typography>You are not signed in. </Typography>
                </Box>
                <Box mt={2} mb={1}>
                  <Link href={"/auth"}>Sign in</Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container> */}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <DocumentComp />
    </div>
    // <Container maxWidth="sm">
    //   <DocumentComp />
    //   <Box mt={3} mb={1}>
    //     <Card variant="outlined">
    //       <CardContent>
    //         <Box mt={2} mb={1}>
    //           <Link href={"/static"}>Static Page</Link>
    //         </Box>
    //         <Box mt={2} mb={1}>
    //           <Typography variant="h4" component="h1" gutterBottom>
    //             Entroprise SSR
    //           </Typography>
    //         </Box>
    //         <Box mt={2} mb={1}>
    //           <Typography>You're signed in. Email: {user.email}</Typography>
    //         </Box>
    //         <Box mt={2} mb={1}>
    //           <Button
    //             disableElevation
    //             variant="contained"
    //             onClick={() => logout()}
    //           >
    //             Log out
    //           </Button>
    //         </Box>
    //       </CardContent>
    //     </Card>
    //   </Box>
    // </Container>
  );
};

export default withApollo({ ssr: true })(Index);
