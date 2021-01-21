import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography, Box } from "@material-ui/core";
import { useRouter } from "next/router";
import { useFlags } from "@happykit/flags";

import { ThreadInterface } from "../../interfaces";
import Layout from "../../components/Layout";
import { withApollo } from "../../lib/withApollo";
import ThreadDetail from "../../components/Threads/ThreadDetail";
import IndeterminateLoader from "../../components/IndeterminateLoader";

type Props = {
  item?: ThreadInterface;
  errors?: string;
};

const GET_THREADS = gql`
  query getThreads($id: Int!) {
    threads_by_pk(id: $id) {
      threadName
      threadDescription
      id
      created_at
      updated_at
    }
  }
`;

const Thread = ({ item, errors }: Props) => {
  const flags = useFlags();
  if (!flags.threads) {
    return (
      <Layout title={`${item ? item.threadName : "Detail"}`}>
        <Box my={3}>
          <Typography>The threads feature is not enabled.</Typography>
        </Box>
      </Layout>
    );
  }
  if (errors) {
    return (
      <Layout title="Error | Entroprise">
        <Typography>Error: {errors}</Typography>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.threadName : "Detail"}`} backUrl="/threads">
      {item && <ThreadDetail item={item} />}
    </Layout>
  );
};

const ThreadListQuery = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_THREADS, {
    variables: { id: id },
  });

  if (loading) {
    return <IndeterminateLoader />;
  }
  if (error) {
    return <Typography>Error!</Typography>;
  }
  return <Thread item={data.threads_by_pk} />;
};

export default withApollo({ ssr: true })(ThreadListQuery);
