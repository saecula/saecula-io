'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';

import Header from './_components/Header';
import Footer from './_components/Footer';

import '../styles/variables.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>saecula</title>
        <meta name="description" content="this is kashi's website" />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
};
