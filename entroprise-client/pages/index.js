import useSWR from "swr";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_QUESTIONS = gql`
  query MyQuery {
    questions {
      id
      question
    }
  }
`;

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  const { data, error } = useSWR(
    user ? ["/api/getFood", user.token] : null,
    fetcher
  );
  const { apolloLoading, apolloError, apolloData } = useQuery(GET_QUESTIONS);

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  return (
    <div>
      <div>
        <p>You're signed in. Email: {user.email}</p>
        <p
          style={{
            display: "inlinelock",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      <div>
        <Link href={"/example"}>
          <a>Another example page</a>
        </Link>
      </div>
      {console.log("apolloLoading", apolloLoading)}
      {console.log("apolloData", apolloData)}
      {console.log("apolloError", apolloError)}
      {error && <div>Failed to fetch food!</div>}
      {data && <div>Your favorite food is {data.food}.</div>}
    </div>
  );
};

export default withApollo({ ssr: true })(Index);
