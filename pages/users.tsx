import { withApollo } from "../lib/withApollo";
import Layout from "../components/Layout";
import UsersWrapper from "../components/Users/UsersWrapper";

const UsersPage = () => {
  return (
    <Layout title="Users">
      <UsersWrapper />
    </Layout>
  );
};

export default withApollo({ ssr: true })(UsersPage);
