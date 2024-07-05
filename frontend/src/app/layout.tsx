import type { Metadata } from 'next';
import './globals.css';
import { SystemContextProvider } from '@context/useSystem';
import { ContactContextProvider } from '@context/useContact';

export const metadata: Metadata = {
  title: 'Leste Telecom | Sandro Filho DEV',
  description: 'Projeto criado e desenvolvido por Sandro Filho DEV',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SystemContextProvider>
      <ContactContextProvider>
        <html lang="en">
          <head>
            <link
              rel="icon"
              href="favicon.ico"
            />
          </head>
          <body>{children}</body>
        </html>
      </ContactContextProvider>
    </SystemContextProvider>
  );
}
