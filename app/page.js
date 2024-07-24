import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const mailto = 'mailto:kathleen.r.gilbert.0@gmail.com';
const resumeUrl = 'https://www.bit.ly/kathleen-gilbert-resume';
const inUrl = 'https://www.linkedin.com/in/saecula';
const ghUrl = 'https://www.github.com/saecula';
const xUrl = 'https://www.x.com/_saecula';

const Icon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={45} height={45} />
  </Link>
);

const Fade1 = () => (
  <div
    className={styles.fade1}
  >{`I'm good at picturing systems as their simplest moving parts.`}</div>
);

const Fade2 = () => (
  <div
    className={styles.fade2}
  >{`I enjoy using this to build gadgets that solve real-world problems really well.`}</div>
);

const Fade3 = () => (
  <div className={styles.fade3}>
    <div className={styles.calltoaction}>
      Feel free to <Link href={mailto}>email me</Link>, check out my{' '}
      <Link href={resumeUrl}>resume</Link>, or visit one of the links below.
    </div>
    <svg width={30} height={30} className={styles.arrow} viewBox="0 0 100 100">
      <path d="M 0,0 L 50,40 L 100,0" />
    </svg>
  </div>
);

export default () => {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <img src="/intro.svg" alt="Hi, I'm Kathleen." width={300} height={45} />
      </div>
      <div className={styles.fadegroup}>
        <Fade1 />
        <Fade2 />
        <Fade3 />
      </div>
      <div className={styles.links}>
        <Icon href={inUrl} src="/in.svg" />
        <Icon href={ghUrl} src="/gh.svg" />
        <Icon href={xUrl} src="/x.svg" />
      </div>
    </div>
  );
};
