import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const iconSize = 40;

const Header = () => (
  <header className={styles.header}>
    <div id="home" className={styles.group}>
      <Link href="/">
        <img src="/mascot.svg" width={iconSize} height={iconSize} />
      </Link>
    </div>
    <div id="dummy" className={styles.group}>
      <img src="/login.svg" width={iconSize} height={iconSize} />
    </div>
  </header>
);

export default Header;
