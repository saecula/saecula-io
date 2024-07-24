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
        <div>
          <div className={styles.pad} />
          <img
            src="/intro.svg"
            alt="Hi, I'm Kathleen."
            width={300}
            height={45}
          />
        </div>
        <svg
          width={30}
          height={30}
          className={styles.arrow}
          viewBox="0 0 100 100"
        >
          <path d="M 0,0 L 50,40 L 100,0" />
        </svg>
      </div>
      <div className={styles.links}>
        <Icon href={inUrl} src="/in.svg" />
        <Icon href={ghUrl} src="/gh.svg" />
        <Icon href={xUrl} src="/x.svg" />
      </div>
    </div>
  );
};
