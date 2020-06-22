import { withApollo } from "next-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://entroprise.app/v1/graphql",
  cache: new InMemoryCache(),
  request: (operation) => {
    operation.setContext({
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "supersecret",
      },
    });
  },
});

export default withApollo(apolloClient);
