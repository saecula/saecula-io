import React from 'react';

import Fadegroup from './Fadegroup';
import styles from './style.module.css';

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <img src="/intro.svg" alt="Hi, I'm Kathleen." width={300} height={45} />
      </div>
      <Fadegroup />
    </>
  );
};

export default Intro;
