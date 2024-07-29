'use client';
import React, { useState, useEffect } from 'react';

import Tree from './_components/Tree';
import Intro from './_components/Intro';

import styles from './style.module.css';

export default () => {
  return (
    <div className={styles.page}>
      {/* <Tree /> */}
      <Intro />
    </div>
  );
};
