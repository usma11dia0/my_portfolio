import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { bleepsSettings } from "./_appConfig";
import { BleepsProvider } from '@arwes/react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <BleepsProvider {...bleepsSettings}>
        <Component {...pageProps} />
      </BleepsProvider>
    </>
  );
}
