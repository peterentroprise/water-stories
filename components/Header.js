import Link from "next/link";
import { withRouter } from "next/router";
import LogoutBtn from "./Auth/Logout";
import { Typography } from "@material-ui/core";

const Header = ({ router: { pathname } }) => (
  <div>
    <Typography variant="h3">Index</Typography>
    <LogoutBtn />
  </div>
);

export default withRouter(Header);
