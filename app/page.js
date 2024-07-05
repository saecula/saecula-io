import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const iconSize = 50;
const writingWidth = 400;
const writingHeight = 40;

const Icon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={iconSize} height={iconSize} />
  </Link>
);

export default () => {
  return (
    <div className={styles.page}>
      <div>
        <img
          src="/blog.svg"
          alt="blog"
          width={writingWidth}
          height={writingHeight + 10}
        />
      </div>
      <div>
        <img
          src="/about.svg"
          alt="about"
          width={writingWidth}
          height={writingHeight}
        />
      </div>
      <div className={styles.links}>
        <Icon href="https://www.linkedin.com/in/saecula/" src="/in.svg" />
        <Icon href="https://www.github.com/saecula" src="/gh.svg" />
        <Icon href="https://www.x.com/_saecula" src="/x.svg" />
      </div>
    </div>
  );
};
