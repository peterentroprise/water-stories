import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  SubscriptionClient,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";

import { SERVER, WEB_SOCKET_LINK } from "../config";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient;
let accessToken = null;

const requestAccessToken = async () => {
  if (accessToken) return;

  const res = await fetch(`${process.env.APP_HOST}/api/session`);
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
  } else {
    accessToken = "public";
  }
};

const resetTokenLink = onError(({ networkError }) => {
  if (
    networkError &&
    networkError.name === "ServerError" &&
    networkError.statusCode === 401
  ) {
    accessToken = null;
  }
});

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: SERVER,
    credentials: "include",
    headers,
    fetch,
  });
  return httpLink;
};

const createWSLink = () => {
  return new WebSocketLink({
    uri: WEB_SOCKET_LINK,
    options: {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken();
        return {
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        };
      },
    },
  });
};

function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === "undefined";
  let link;
  if (ssrMode) {
    link = createHttpLink(headers);
  } else {
    link = createWSLink();
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
