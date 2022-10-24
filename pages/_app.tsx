import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/nunito-sans";
import theme from "../themes/myTheme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>ShadowGhost</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
