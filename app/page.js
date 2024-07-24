import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const inUrl = 'https://www.linkedin.com/in/saecula';
const ghUrl = 'https://www.github.com/saecula';
const xUrl = 'https://www.x.com/_saecula';

const Icon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={45} height={45} />
  </Link>
);

export default () => {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <img src="/intro.svg" alt="Hi, I'm Kathleen." width={300} height={45} />
        <div className={styles.arrow}>
          <svg viewBox="0 0 100 100">
            <path d="M 0,0 L 50,50 L 100,0" />
          </svg>
        </div>
      </div>
      <div className={styles.links}>
        <Icon href={inUrl} src="/in.svg" />
        <Icon href={ghUrl} src="/gh.svg" />
        <Icon href={xUrl} src="/x.svg" />
      </div>
    </div>
  );
};
