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
        <title>Entroprise</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
