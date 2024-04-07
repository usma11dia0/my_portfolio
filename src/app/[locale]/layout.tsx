import { Metadata } from 'next'

import { bleepsSettings } from "../../pages/_appConfig";
import { useRouter } from 'next/router';
import { BleepsProvider } from '@arwes/react';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
}

export default function LocaleLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    // const router = useRouter();
    return (
      <html lang={locale}>
        <body className="font-primary">
          <BleepsProvider {...bleepsSettings}>
            {children}
          </BleepsProvider>
        </body>
      </html>
    )
  }
