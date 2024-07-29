import React from 'react';

import Tree from './Tree';
import styles from './style.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Tree />
    <div className={styles.group}>
      <a href="/terms">terms of service</a>
      <div>{' | '}</div>
      <a href="/privacy">privacy</a>
    </div>
  </footer>
);

export default Footer;
