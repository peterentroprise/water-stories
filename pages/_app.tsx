import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import "@fontsource/muli";
import LogRocket from "logrocket";
import theme from "../config/theme";
import { configure } from "@happykit/flags";

export const cache = createCache({ key: "css", prepend: true });

configure({ clientId: process.env["NEXT_PUBLIC_FLAGS_CLIENT_ID"] });

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  if (typeof window !== "undefined") {
    LogRocket.init("xjwz8l/entro-web");
  }

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#556cd6" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/iconsfavicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/images/icons/apple-icon-180x180.png"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
