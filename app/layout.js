'use client';

import React from 'react';
import { Inter } from 'next/font/google';

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
        <main>{children}</main>
      </body>
    </html>
  );
};
