import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";

import VideoUploadComponent from "../components/videoUpload/VideoUploadComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Index = () => {
  const { user, logout } = useUser();
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box mt={3} mb={1}>
        <VideoUploadComponent />
      </Box>
    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
