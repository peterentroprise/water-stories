import { useFetchUser } from "../../lib/user";
import Login from "../Auth/Login";
import IndeterminateLoader from "../IndeterminateLoader";

const AuthWrapper = ({ children }) => {
  const { user, loading } = useFetchUser();
  return (
    <>
      {!loading && !user && <Login />}
      {loading && <IndeterminateLoader />}
      {user && <>{children}</>}
    </>
  );
};

export default AuthWrapper;
