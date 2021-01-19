import React, { ReactNode } from "react";
import Head from "next/head";

import Footer from "./Footer";
import Core from "./Core";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Entroprise" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Core title={title}>{children}</Core>
    <Footer />
  </>
);

export default Layout;
