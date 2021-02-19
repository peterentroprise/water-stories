import { GetStaticProps } from "next";
import { gql } from "@apollo/react-hooks";

import { Request } from "../../interfaces";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";

import Layout from "../../components/Layout";
import RequestsWrapper from "../../components/Requests/RequestsWrapper";

type Props = {
  requests: Request[];
};

const GET_REQUESTS = gql`
  query getRequests {
    requests {
      name
      description
      created_at
      id
      is_active
      slug
      updated_at
    }
  }
`;

const WithStaticProps = ({ requests }: Props) => {
  const title = "Requests";
  return (
    <Layout title={title}>
      <RequestsWrapper requests={requests} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: GET_REQUESTS });
  const { requests } = data;

  addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });

  console.log(data);
  return { props: { requests } };
};

export default WithStaticProps;
