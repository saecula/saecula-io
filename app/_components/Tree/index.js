import React from 'react';

import styles from './style.module.css';

const onTip = {
  bottom: '99px',
  transform: 'scaleX(-1) scaleY(-1)',
  right: '50%',
};

const onStem = {
  bottom: '59px',
  transform: 'scaleY(-1)',
  right: '25%',
};

const Leaf = ({ style }) => {
  return (
    <div className={styles.grow} style={style}>
      <img src="/leaf.svg" width={25} height={25} />
    </div>
  );
};

const Stem = () => {
  return (
    <div>
      <img src="/stem.svg" width={100} height={100} />
    </div>
  );
};

const TreeOld = () => {
  return (
    <div className={styles.tree}>
      <Leaf style={onTip} />
      <Leaf style={onStem} />
      <Stem />
    </div>
  );
};

const Tree = () => {
  return (
    <div className={styles.tree}>
      <img src="/tree.svg" width={100} height={150} />
    </div>
  );
};

export default Tree;
