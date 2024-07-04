import React from 'react';

import style from './style.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style['footer-Link']}>
      <a href="/terms">terms of service </a>
    </div>
    <div className={style['footer-Link']}>
      <a href="/privacy"> privacy</a>
    </div>
  </footer>
);

export default Footer;
