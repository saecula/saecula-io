import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const iconSize = 38;

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <div className={styles.group}>
        <img src="/mascot.svg" width={iconSize} height={iconSize} />
        <div className={styles.title}>{'saecula.io'}</div>{' '}
      </div>
    </Link>
    <div className={styles.group}>
      <img
        alt="Login coming soon."
        src="/login.svg"
        width={iconSize}
        height={iconSize}
      />
    </div>
  </header>
);

export default Header;
