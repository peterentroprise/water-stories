import Layout from "../components/Layout";
import Login from "../components/Auth/Login";
import LogoutBtn from "../components/Auth/Logout";
import TodoPrivateWrapper from "../components/Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "../components/Todo/TodoPublicWrapper";
import OnlineUsersWrapper from "../components/OnlineUsers/OnlineUsersWrapper";

import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

const IndexPage = () => {
  const { user, loading } = useFetchUser();
  if (!loading && !user) {
    return <Login />;
  }
  if (!user) {
    return <></>;
  }
  return (
    <Layout title="Index | Entroprise">
      <TodoPrivateWrapper />
      <TodoPublicWrapper />
      <OnlineUsersWrapper />
      <LogoutBtn />
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage);
