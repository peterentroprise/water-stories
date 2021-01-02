import React from "react";
import Router from "next/router";

const LogoutBtn = ({ logoutHandler }) => (
  <button onClick={() => Router.push("/api/logout")}>Log Out</button>
);

export default LogoutBtn;
