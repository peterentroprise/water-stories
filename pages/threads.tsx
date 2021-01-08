import { Box, Card, CardHeader, CardContent } from "@material-ui/core";

import Layout from "../components/Layout";
import Login from "../components/Auth/Login";
import ThreadsWrapper from "../components/Threads/ThreadsWrapper";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const ThreadsPage = () => {
  const { user, loading } = useFetchUser();
  if (!loading && !user) {
    return (
      <Layout title="Threads | Entroprise">
        <Login />
      </Layout>
    );
  }
  return (
    <Layout title="Threads | Entroprise">
      <Box my={3}>
        <Card variant="outlined">
          <CardHeader title="Public Threads" />
          <CardContent>
            <ThreadsWrapper />
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(ThreadsPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
