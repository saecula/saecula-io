import React from 'react';
import Image from 'next/image';

import styles from './style.module.css';

const altText =
  "Welcome! this is my personal site and it's under construction. for now you can find me at github.com/saecula or say hello at admin@saecula.io.";

export default () => {
  return (
    <div className={styles.intro}>
      <Image src="/intro.svg" alt={altText} width={450} height={650} />
    </div>
  );
};
