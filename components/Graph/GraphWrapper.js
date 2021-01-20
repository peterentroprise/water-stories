import { useFetchUser } from "../../lib/user";
import CardWrapper from "../Card/CardWrapper";
import Login from "../Auth/Login";
import IndeterminateLoader from "../IndeterminateLoader";
import GraphDataWrapper from "./GraphDataWrapper";

const GraphWrapper = () => {
  const { user, loading } = useFetchUser();
  return (
    <>
      {!loading && !user && <Login />}
      {loading && <IndeterminateLoader />}
      {user && <GraphDataWrapper />}
    </>
  );
};

export default GraphWrapper;
