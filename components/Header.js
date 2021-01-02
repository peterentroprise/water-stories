import Link from "next/link";
import { withRouter } from "next/router";
import LogoutBtn from "./Auth/Logout";

const Header = ({ router: { pathname } }) => (
  <div>
    <p>GraphQL Tutorial App</p>
    <LogoutBtn />
  </div>
);

export default withRouter(Header);
