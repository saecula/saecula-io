import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const iconSize = 40;

const Icon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={iconSize} height={iconSize} />
  </Link>
);

export default () => {
  return (
    <div className={styles.page}>
      <div>about</div>
      <div>blog</div>
      <div className={styles.links}>
        <Icon href="https://www.linkedin.com/in/saecula/" src="/in.svg" />
        <Icon href="https://www.github.com/saecula" src="/gh.svg" />
        <Icon href="https://www.x.com/_saecula" src="/x.svg" />
      </div>
    </div>
  );
};
