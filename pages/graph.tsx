import { withApollo } from "../lib/withApollo";
import Layout from "../components/Layout";
import GraphWrapper from "../components/Graph/GraphWrapper";

const GraphPage = () => {
  return (
    <Layout title="Graph">
      <GraphWrapper />
    </Layout>
  );
};

export default withApollo({ ssr: true })(GraphPage);
