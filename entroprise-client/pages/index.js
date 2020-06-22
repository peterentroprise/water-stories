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

// const fetcher = (url, token) =>
//   fetch(url, {
//     method: "GET",
//     headers: new Headers({ "Content-Type": "application/json", token }),
//     credentials: "same-origin",
//   }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  // const { data, error } = useSWR(
  //   user ? ["/api/getFood", user.token] : null,
  //   fetcher
  // );
  const { loading, error, data } = useQuery(GET_QUESTIONS);

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
      <p>You're signed in. Email: {user.email}</p>
      <button onClick={() => logout()}>Log out</button>
      <div>
        <Link href={"/static"}>
          <a>Static Page</a>
        </Link>
      </div>
      {error && <div>Error loading data.</div>}
      {loading && <div>Loading data ...</div>}
      <ul>
        {console.log("apolloData", data)}
        {data.questions.map((item) => (
          <li key={item.id}>{item.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default withApollo({ ssr: true })(Index);
