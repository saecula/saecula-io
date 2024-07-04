import React from 'react';

import styles from './style.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.group}>
      <a href="/terms">terms of service </a>
      <>{'|'}</>
      <a href="/privacy"> privacy</a>
    </div>
  </footer>
);

export default Footer;
