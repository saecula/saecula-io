'use client';
import React, { useEffect, useSyncExternalStore } from 'react';
import Splash from './_components/Splash';

import styles from './style.module.css';

const storageKey = 'dramaticPauseSeen';

// read once per page load so the snapshot stays stable while Content is mounted
let seen =
  typeof window !== 'undefined' && Boolean(localStorage.getItem(storageKey));

const subscribe = () => () => {};
const getSeen = () => seen;
// the server never knows, so it always renders the dramatic version
const getServerSeen = () => false;

const Content = () => {
  const dramaticPause = !useSyncExternalStore(
    subscribe,
    getSeen,
    getServerSeen,
  );

  useEffect(() => {
    localStorage.setItem(storageKey, true);
    // client-side navigation back to the home page should skip the pause
    return () => {
      seen = true;
    };
  }, []);

  return (
    <div className={styles.content}>
      <Splash dramaticPause={dramaticPause} />
    </div>
  );
};

export default Content;
