'use client';

import React from 'react';
import { Inter } from 'next/font/google';

import '../styles/variables.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'saecula';
const description = "this is kashi's website";

export default ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};
