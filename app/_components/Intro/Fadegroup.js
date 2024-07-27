import React from 'react';
import Link from 'next/link';

import Icon from './Icon';
import styles from './style.module.css';

const mailto = 'mailto:kathleen.r.gilbert.0@gmail.com';
const resumeUrl = 'https://www.bit.ly/kathleen-gilbert-resume';
const inUrl = 'https://www.linkedin.com/in/saecula';
const ghUrl = 'https://www.github.com/saecula';
const xUrl = 'https://www.x.com/_saecula';

const Fade1 = ({ animate }) => (
  <div
    className={animate ? styles.fade1 : styles.quickfade1}
  >{`I'm good at picturing systems as their simplest moving parts.`}</div>
);

const Fade2 = ({ animate }) => (
  <div
    className={animate ? styles.fade2 : styles.quickfade1}
  >{`I enjoy using this to build gadgets that solve real-world problems really well.`}</div>
);

const Fade3 = ({ animate }) => (
  <div className={animate ? styles.fade3 : styles.quickfade2}>
    <div className={styles.calltoaction}>
      Feel free to <Link href={mailto}>email me</Link>, check out my{' '}
      <Link target="_blank" rel="noopener noreferrer" href={resumeUrl}>
        resume
      </Link>
      , or visit one of the links below.
    </div>
    <svg
      width={30}
      height={30}
      className={animate ? styles.arrow : styles.quickarrow}
      viewBox="0 0 100 100"
    >
      <path d="M 0,0 L 50,40 L 100,0" />
    </svg>
    <div className={styles.links}>
      <Icon href={inUrl} src="/in.svg" />
      <Icon href={ghUrl} src="/gh.svg" />
      <Icon href={xUrl} src="/x.svg" />
    </div>
  </div>
);

const Fadegroup = ({ animate }) => {
  return (
    <div className={styles.fadegroup}>
      <Fade1 animate={animate} />
      <Fade2 animate={animate} />
      <Fade3 animate={animate} />
    </div>
  );
};

export default Fadegroup;
