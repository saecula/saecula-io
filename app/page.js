import React from 'react';

import styles from './style.module.css';

const altText =
  "Welcome! this is my personal site and it's under construction. for now you can find me at github.com/saecula or say hello at admin@saecula.io.";

export default () => {
  return (
    <div className={styles.splash}>
      <div>about</div>
      <div>blog</div>
      <div>github</div>
      <div>linkedin</div>
    </div>
  );
};
