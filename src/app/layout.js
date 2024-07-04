import React from 'react';
import { Inter } from 'next/font/google';

import Header from './Header';
import Footer from './Footer';

import './styles';

const inter = Inter({ subsets: ['latin'] });

export default ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>saecula</title>
        <meta name="description" content="this is kashi's website" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
