import { withApollo } from "../lib/withApollo";

import Layout from "../components/Layout";
import AccountWrapper from "../components/Account/AccountWrapper";

const AccountPage = () => {
  return (
    <Layout title="Account">
      <AccountWrapper />
    </Layout>
  );
};

export default withApollo({ ssr: true })(AccountPage);
