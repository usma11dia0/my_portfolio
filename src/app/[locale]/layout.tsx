'use client'

import type { Metadata } from 'next'
import { BleepsProvider } from '@arwes/react';

import { bleepsSettings } from "./config";

const metadata: Metadata = {
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
