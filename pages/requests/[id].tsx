import { GetStaticProps, GetStaticPaths } from "next";
import { gql } from "@apollo/react-hooks";

import { Box, Typography } from "@material-ui/core";

import { Request } from "../../interfaces";

import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Layout from "../../components/Layout";

type Props = {
  request?: Request;
  errors?: string;
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

const StaticPropsDetail = ({ request, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${request ? request.name : "Detail"}`}>
      {request && (
        <>
          <p>{request.name}</p>
          <p>{request.description}</p>
          <p>{request.created_at}</p>
          <p>{request.updated_at}</p>
          <p>{request.is_active}</p>
          <p>{request.slug}</p>
        </>
      )}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: GET_REQUESTS });
  const { requests } = data;
  console.log("THESE ARE STATIC PATHS");
  console.log(requests);
  const paths = requests.map((request: Request) => ({
    params: { id: `${request.id}`.toString() },
  }));
  addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({ query: GET_REQUESTS });
    const { requests } = data;
    const request = requests.find(
      (request: Request) => `${request.id}` === String(id)
    );
    addApolloState(apolloClient, {
      props: {},
      revalidate: 1,
    });
    return { props: { request } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
