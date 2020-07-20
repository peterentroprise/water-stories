import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";
import CompositionComponent from "../components/composition/CompositionComponent";
import DocumentComp from "../components/composition/DocumentComp";

import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
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
      <>
        <Container maxWidth="sm">
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
        </Container>
      </>
    );
  }

  return (
    <Container maxWidth="sm">
      <DocumentComp />
      <Box mt={12} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <Typography>
              One document from Pat Trap has been indexed. G-Manual-6305-Binder
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box mt={2} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vestibulum eros sit amet efficitur consequat. Vivamus vel tempus
              purus. Sed id massa eu quam dignissim mollis. In eget rhoncus sem.
              Etiam pharetra neque tortor. Sed vitae tincidunt augue, eu
              fermentum felis. Quisque convallis condimentum quam in varius. Sed
              rhoncus mollis massa, in pellentesque libero tincidunt ac. Ut
              fermentum erat eget mi pharetra, ut ultrices nisl tincidunt.
              Aliquam mollis, sapien et dignissim bibendum, urna quam cursus
              lacus, vitae rutrum erat massa vel purus. Pellentesque id interdum
              lacus, ut tincidunt diam. Donec dictum mauris eget felis viverra,
              volutpat fermentum metus dictum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec
              euismod, nunc a congue scelerisque, nibh mi congue neque, blandit
              blandit turpis nisi eu neque. Donec volutpat risus quam, sit amet
              aliquam augue cursus eu. Nullam ultrices neque ut lorem eleifend
              tempor. Aenean laoreet arcu augue, a molestie mi posuere eu. Fusce
              fringilla erat est. In id dictum neque. Maecenas ut sapien non leo
              pulvinar ultrices a vitae diam. Sed in lacus vel ante porttitor
              rhoncus. Nunc nisi risus, rutrum rutrum interdum quis, pharetra ac
              tellus. Nunc id volutpat sapien. Nulla consequat arcu tortor, vel
              vestibulum quam ultrices non. Suspendisse sed fringilla massa, et
              scelerisque metus. Nulla et consectetur enim. In nec pretium
              tortor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Proin et tincidunt magna. Aliquam
              ac enim nulla. Curabitur pretium leo feugiat eros eleifend, in
              egestas tellus pellentesque. Curabitur sit amet sodales ligula.
              Sed in felis at sapien sagittis iaculis in et sapien. Nam sodales
              turpis et ante lacinia elementum. Mauris tincidunt ex at tortor
              luctus accumsan. Quisque congue purus id sem ultricies viverra.
              Sed ut faucibus arcu, at viverra tellus. Aenean quam urna, maximus
              nec aliquam vitae, cursus a leo. Duis volutpat id arcu eu
              pharetra. Nullam condimentum, urna non scelerisque cursus, dolor
              purus facilisis odio, non luctus justo est at sapien. In
              sollicitudin dolor velit, sit amet aliquet purus porttitor eget.
              Sed fringilla, elit fermentum finibus tincidunt, erat justo
              pellentesque erat, in cursus libero ex id tortor. Proin suscipit
              venenatis gravida. In hac habitasse platea dictumst. Nullam
              rhoncus egestas consequat. Integer nec urna lacus. Suspendisse
              ultrices tellus sed nunc varius scelerisque. Proin vestibulum
              vulputate velit ac malesuada. Vivamus bibendum eget ligula et
              eleifend. Fusce neque risus, tempor nec placerat sollicitudin,
              sagittis vel quam. Pellentesque vel purus ac dolor rutrum
              ullamcorper. Curabitur non consectetur nisl. Donec ullamcorper
              urna vitae sapien semper, nec finibus velit pellentesque. Morbi
              pulvinar feugiat neque ut dictum. Vivamus tincidunt dolor at arcu
              volutpat pretium.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box mt={3} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <Box mt={2} mb={1}>
              <Link href={"/static"}>Static Page</Link>
            </Box>
            <Box mt={2} mb={1}>
              <Typography variant="h4" component="h1" gutterBottom>
                Entroprise SSR
              </Typography>
            </Box>
            <Box mt={2} mb={1}>
              <Typography>You're signed in. Email: {user.email}</Typography>
            </Box>
            <Box mt={2} mb={1}>
              <Button
                disableElevation
                variant="contained"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
