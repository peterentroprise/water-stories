import { Box, Card, CardHeader, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import Layout from "../components/Layout";
import Login from "../components/Auth/Login";
import LogoutBtn from "../components/Auth/Logout";
import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const AccountPage = () => {
  const { user, loading } = useFetchUser();
  if (!loading && !user) {
    return (
      <Layout title="Users | Entroprise">
        <Login />
      </Layout>
    );
  }
  if (!user) {
    return <></>;
  }
  return (
    <Layout title="Account | Entroprise">
      <Box my={3}>
        <Card variant="outlined">
          <CardHeader title="Account" subheader={user.name} />
          <CardContent>
            <Avatar alt={user.name} src={user.picture} />
            <LogoutBtn />
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(AccountPage);
