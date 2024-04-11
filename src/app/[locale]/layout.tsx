import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import '../../styles/globals.css';
import StoreProvider from '../StoreProvider';

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

    const messages = useMessages();

    return (
      <html lang={locale}>
        <body className="font-primary">
          <StoreProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </StoreProvider>
        </body>
      </html>
    )
  }
