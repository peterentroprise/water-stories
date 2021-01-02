import Router from "next/router";

const Login = () => {
  return (
    <div>
      <h6>Welcome to the GraphQL tutorial app</h6>
      <p>Please login to continue</p>
      <button
        onClick={() => {
          Router.push("/api/login");
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
