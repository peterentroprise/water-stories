import { Box, Card, CardHeader, CardContent } from "@material-ui/core";

import Layout from "../components/Layout";
import Login from "../components/Auth/Login";
import MessagesWrapper from "../components/Messages/MessagesWrapper";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const MessagesPage = () => {
  const { user, loading } = useFetchUser();
  if (!loading && !user) {
    return (
      <Layout title="Messages | Entroprise">
        <Login />
      </Layout>
    );
  }
  return (
    <Layout title="Messages | Entroprise">
      <Box my={3}>
        <Card variant="outlined">
          <CardHeader title="Public Messages" />
          <CardContent>
            <MessagesWrapper />
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(MessagesPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
