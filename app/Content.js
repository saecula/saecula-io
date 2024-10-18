'use client';
import React, { useState, useEffect } from 'react';
import Splash from './_components/Splash';

import styles from './style.module.css';

const Content = () => {
  const [dramaticPause, setDramaticPause] = useState(true);

  useEffect(() => {
    const dramaticPauseSeen = localStorage.getItem('dramaticPauseSeen');
    if (dramaticPauseSeen) {
      setDramaticPause(false);
    } else {
      localStorage.setItem('dramaticPauseSeen', true);
    }
  }, []);

  return (
    <div className={styles.content}>
      <Splash dramaticPause={dramaticPause} />
    </div>
  );
};

export default Content;
