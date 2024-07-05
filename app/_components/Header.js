import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const iconSize = 38;

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <div id="home" className={styles.group}>
        <img src="/mascot.svg" width={iconSize} height={iconSize} />
        <div>{'saecula.io'}</div>
        <div>{'(coming soon)'}</div>
      </div>
    </Link>
    <div id="dummy" className={styles.group}>
      <img src="/login.svg" width={iconSize} height={iconSize} />
    </div>
  </header>
);

export default Header;
