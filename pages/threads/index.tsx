import Layout from "../../components/Layout";
import ThreadsWrapper from "../../components/Threads/ThreadsWrapper";
import { withApollo } from "../../lib/withApollo";

const ThreadsPage = () => {
  return (
    <Layout title="Threads">
      <ThreadsWrapper />
    </Layout>
  );
};

export default withApollo({ ssr: true })(ThreadsPage);
