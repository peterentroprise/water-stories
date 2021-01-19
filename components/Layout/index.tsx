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
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>{title}</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon-180x180.png"></link>
      <meta name="theme-color" content="#556cd6" />
    </Head>
    <Core title={title}>{children}</Core>
    <Footer />
  </>
);

export default Layout;
