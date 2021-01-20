import { useFetchUser } from "../../lib/user";
import CardWrapper from "../Card/CardWrapper";
import Login from "../Auth/Login";
import IndeterminateLoader from "../IndeterminateLoader";
import OnlineUsersWrapper from "../OnlineUsers/OnlineUsersWrapper";

const UsersWrapper = () => {
  const { user, loading } = useFetchUser();
  return (
    <>
      {!loading && !user && <Login />}
      {loading && <IndeterminateLoader />}
      {user && (
        <CardWrapper title="Online Users">
          <OnlineUsersWrapper />
        </CardWrapper>
      )}
    </>
  );
};

export default UsersWrapper;
