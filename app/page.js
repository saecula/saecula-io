'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import styles from './style.module.css';

export default ({ session }) => {
  return (
    <SessionProvider session={session}>
      <div className={styles.page}>
        <Header />
        <Content />
        <Footer />
      </div>
    </SessionProvider>
  );
};
