import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Menu from '../components/Menu';

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Leste Contact',
  description: 'Desafio Leste Telecom. Feito por Felipe Manchester',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={IBMPlexSans.className}>
        <main>
          <Header />
          <Menu />
          {children}
        </main>
        <footer className='text-center'>
          Feito com ❤️ por{' '}
          <a
            href='https://linkedin.com/in/felipemanchester'
            target='_blank'
            className='text-font-first'
          >
            Felipe Manchester
          </a>
        </footer>
      </body>
    </html>
  );
}
