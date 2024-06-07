import React from 'react';
import { Inter } from 'next/font/google';

import Image from 'next/image';
import icon from './icon.svg';

import './css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'saecula',
  description: "this is kashi's website",
};

const Head = () => (
  <head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
  </head>
);

const Header = () => (
  <header>
    <a href="/">
      <Image src={icon} height={20} />
    </a>
  </header>
);

export default ({ children }) => {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};
