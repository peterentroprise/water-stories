import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
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
      <Layout title="Threads | Entroprise">
        <Box my={3}>
          <Typography>The threads feature is not enabled.</Typography>
        </Box>
      </Layout>
    );
  }
  if (!loading && !user) {
    return (
      <Layout title="Threads | Entroprise">
        <Login />
      </Layout>
    );
  }
  return (
    <Layout title="Threads | Entroprise">
      <Card variant="outlined">
        <CardHeader title="Public Threads" />
        <CardContent>
          <ThreadsWrapper />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default withApollo({ ssr: true })(ThreadsPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
