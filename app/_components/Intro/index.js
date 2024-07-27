'use client';
import React, { useState, useEffect } from 'react';

import Fadegroup from './Fadegroup';
import styles from './style.module.css';

const Intro = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const animationSeen = localStorage.getItem('animationSeen');
    if (animationSeen) {
      setAnimate(false);
    } else {
      localStorage.setItem('animationSeen', true);
    }
  }, []);

  return (
    <>
      <div className={styles.intro}>
        <img src="/intro.svg" alt="Hi, I'm Kathleen." width={300} height={45} />
      </div>
      <Fadegroup animate={animate} />
    </>
  );
};

export default Intro;
