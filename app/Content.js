'use client';
import React, { useState, useEffect } from 'react';
import Splash from './_components/Splash';

import styles from './style.module.css';

const PageComponent = () => {
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
    <div className={styles.page}>
      <div className={styles.intro}>
        <img src="/intro.svg" alt="Hi, I'm Kathleen." width={300} height={45} />
      </div>
      <Splash dramaticPause={dramaticPause} />
    </div>
  );
};

export default PageComponent;
