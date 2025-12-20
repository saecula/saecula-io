'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

import Header from './_components/Header';
import Footer from './_components/Footer';
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
