import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BleepsProvider } from '@arwes/react';
import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';

import { bleepsSettings } from "./_appConfig";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
        locale={router.locale}
        timeZone="Asia/Tokyo"
        messages={pageProps.messages}
      >
      <BleepsProvider {...bleepsSettings}>
        <Component {...pageProps} />
      </BleepsProvider>
    </NextIntlClientProvider>
  );
}
