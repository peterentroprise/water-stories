import Layout from "../components/Layout";
import Header from "../components/Header";
import Login from "../components/Auth/Login";
import TodoPrivateWrapper from "../components/Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "../components/Todo/TodoPublicWrapper";
import OnlineUsersWrapper from "../components/OnlineUsers/OnlineUsersWrapper";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const IndexPage = () => {
  const { user, loading } = useFetchUser({ required: true });
  if (!loading && !user) {
    return <Login />;
  }
  return (
    <Layout title="Index | Entroprise">
      <Header />
      <TodoPrivateWrapper />
      <TodoPublicWrapper />
      <OnlineUsersWrapper />
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage)
