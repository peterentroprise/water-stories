import { withApollo } from "next-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "http://34.120.51.236/v1/graphql",
  cache: new InMemoryCache(),
  request: (operation) => {
    operation.setContext({
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_API_KEY,
      },
    });
  },
  onError: ({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      console.warn("graphQLErrors", graphQLErrors);
    }
    if (networkError) {
      console.warn("networkError", networkError);
    }
  },
});

export default withApollo(apolloClient);
