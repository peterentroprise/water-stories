import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";

import { ThreadInterface } from "../../interfaces";
import Layout from "../../components/Layout";
import { withApollo } from "../../lib/withApollo";
import ThreadDetail from "../../components/Threads/ThreadDetail";

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
  if (errors) {
    return (
      <Layout title="Error | Entroprise">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.threadName : "Detail"} | Entroprise`}>
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
    return <Typography>Loading...</Typography>;
  }
  if (error) {
    console.error(error);
    return <Typography>Error!</Typography>;
  }
  return <Thread item={data.threads_by_pk} />;
};

export default withApollo({ ssr: true })(ThreadListQuery);
