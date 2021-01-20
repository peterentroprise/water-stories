import { Box, Typography, Card, CardContent } from "@material-ui/core";
import { useFlags } from "@happykit/flags";

import Layout from "../../components/Layout";
import Login from "../../components/Auth/Login";
import ThreadsWrapper from "../../components/Threads/ThreadsWrapper";

import { useFetchUser } from "../../lib/user";
import { withApollo } from "../../lib/withApollo";

const ThreadsPage = () => {
  const { user, loading } = useFetchUser();
  const flags = useFlags();
  if (!flags.threads) {
    return (
      <Layout title="Threads">
        <Box my={3}>
          <Typography>The threads feature is not enabled.</Typography>
        </Box>
      </Layout>
    );
  }
  if (!loading && !user) {
    return (
      <Layout title="Threads">
        <Login />
      </Layout>
    );
  }
  return (
    <Layout title="Threads">
      <Card variant="outlined">
        <CardContent>
          <ThreadsWrapper />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default withApollo({ ssr: true })(ThreadsPage);
