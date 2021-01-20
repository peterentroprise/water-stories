import { Typography, Avatar } from "@material-ui/core";

import { useFetchUser } from "../../lib/user";
import CardWrapper from "../Card/CardWrapper";
import Login from "../Auth/Login";
import IndeterminateLoader from "../IndeterminateLoader";
import LogoutBtn from "../Auth/Logout";

const AccountWrapper = () => {
  const { user, loading } = useFetchUser();
  return (
    <>
      {!loading && !user && <Login />}
      {loading && <IndeterminateLoader />}
      {user && (
        <CardWrapper title={user.name}>
          <Typography>Display Name: {user.nickname}</Typography>
          <Avatar alt={user.name} src={user.picture} />
          <LogoutBtn />
        </CardWrapper>
      )}
    </>
  );
};

export default AccountWrapper;
