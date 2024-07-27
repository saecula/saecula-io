import React from 'react';

import styles from './style.module.css';

const Leaf = () => {
  return (
    <div className={styles.leaf}>
      <img src="/leaf.svg" width={50} height={50} />
    </div>
  );
};

const Stem = () => {
  return (
    <div className={styles.stem}>
      <img src="/stem.svg" width={100} height={100} />
    </div>
  );
};

const Tree = () => {
  return (
    <div className={styles.tree}>
      <Leaf />
      <Stem />
    </div>
  );
};

export default Tree;
