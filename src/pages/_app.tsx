import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>José Guilherme - Desenvolvedor Front End</title>
        <Component {...pageProps} />
      </Head>
    </ChakraProvider>
  );
}
