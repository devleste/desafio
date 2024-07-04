import ParamsContextProvider from "@/Components/Context";
import { Header } from "@/Components/Header";
import { defaultTheme } from "@/styles";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <ParamsContextProvider>
      <Header />
      <Component {...pageProps} />
      </ParamsContextProvider>
    </ChakraProvider>
  );
}
