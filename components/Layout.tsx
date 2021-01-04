import React, { ReactNode } from "react";
import Head from "next/head";
import { Button, Typography } from "@material-ui/core";

import Link from "../components/Link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/" passHref>
          <Button>Index</Button>
        </Link>
        <Link href="/about" passHref>
          <Button>About</Button>
        </Link>
        <Link href="/users" passHref>
          <Button>Users List</Button>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <Typography>Footer</Typography>
    </footer>
  </div>
);

export default Layout;
