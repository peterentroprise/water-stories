import React, { ReactNode } from "react";
import Head from "next/head";

import Core from "./Core";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout = ({
  children,
  title = "Entroprise",
  description = "Description",
  keywords = "Keywords",
}: Props) => (
  <>
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
    <Core title={title}>{children}</Core>
  </>
);

export default Layout;
