import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const iconSize = 40;

const HeaderIcon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={iconSize} height={iconSize} />
  </Link>
);

const Header = () => (
  <header className={styles.header}>
    <div className={styles.group}>
      <Link href="/">
        <img src="/mascot.svg" width={iconSize} height={iconSize} />
      </Link>
    </div>
    <div className={styles.group}>
      <HeaderIcon href="https://www.github.com/saecula" src="/gh.svg" />
      <HeaderIcon href="https://www.linkedin.com/in/saecula/" src="/in.svg" />
      <HeaderIcon href="https://www.x.com/_saecula" src="/x.svg" />
    </div>
  </header>
);

export default Header;
