import { Box, Card, CardHeader, CardContent } from "@material-ui/core";

import Layout from "../components/Layout";
import Login from "../components/Auth/Login";

import OnlineUsersWrapper from "../components/OnlineUsers/OnlineUsersWrapper";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const UsersPage = () => {
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
    <Layout title="Users | Entroprise">
      <Box my={3}>
        <Card variant="outlined">
          <CardHeader title="Users" />
          <CardContent>
            <OnlineUsersWrapper />
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(UsersPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
