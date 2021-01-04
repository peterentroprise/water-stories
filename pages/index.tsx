import { Box, Card, CardHeader, CardContent } from "@material-ui/core";

import Layout from "../components/Layout";
import Login from "../components/Auth/Login";
import TodoPrivateWrapper from "../components/Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "../components/Todo/TodoPublicWrapper";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const IndexPage = () => {
  const { user, loading } = useFetchUser();
  if (!loading && !user) {
    return (
      <Layout title="Todos | Entroprise">
        <Login />
      </Layout>
    );
  }
  if (!user) {
    return <></>;
  }
  return (
    <Layout title="Todos | Entroprise">
      <Box my={3}>
        <Card variant="outlined">
          <CardHeader title="Private Todos" />
          <CardContent>
            <TodoPrivateWrapper />
          </CardContent>
        </Card>
      </Box>
      <Box mt={2} mb={1}>
        <Card variant="outlined">
          <CardHeader title="Public Todos" />
          <CardContent>
            <TodoPublicWrapper />
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
