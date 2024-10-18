'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default ({ session }) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <Content />
      <Footer />
    </SessionProvider>
  );
};
