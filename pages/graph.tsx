import Layout from "../components/Layout";
import StoryGraphWrapper from "../components/Graph/StoryGraphWrapper";
import Login from "../components/Auth/Login";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const GraphPage = () => {
  const { user, loading } = useFetchUser();
  if (!loading && !user) {
    return (
      <Layout title="Threads | Entroprise">
        <Login />
      </Layout>
    );
  }
  return (
    <Layout title="Graph | Entroprise">
      <StoryGraphWrapper />
    </Layout>
  );
};

export default withApollo({ ssr: true })(GraphPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
