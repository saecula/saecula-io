import React from 'react';
import Link from 'next/link';

import styles from './style.module.css';

const mailto = 'mailto:kathleen.r.gilbert.0@gmail.com';
const resumeUrl = 'https://www.bit.ly/kathleen-gilbert-resume';
const inUrl = 'https://www.linkedin.com/in/saecula';
const ghUrl = 'https://www.github.com/saecula';
const xUrl = 'https://www.x.com/_saecula';

const aboutMe = [
  `I'm good at picturing systems as their simplest moving parts.`,
  `I enjoy using this to build gadgets that solve real-world problems really well.`,
];

const CallToAction = () => (
  <div className={styles.calltoaction}>
    Feel free to <Link href={mailto}>email me</Link>, check out my{' '}
    <Link target="_blank" rel="noopener noreferrer" href={resumeUrl}>
      resume
    </Link>
    , or visit one of the links below.
  </div>
);

const Arrow = ({ dramaticPause }) => (
  <svg
    width={30}
    height={30}
    className={dramaticPause ? styles.arrow : styles.quickarrow}
    viewBox="0 0 100 100"
  >
    <path d="M 0,0 L 50,40 L 100,0" />
  </svg>
);

const Icon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={45} height={45} />
  </Link>
);

const Links = () => (
  <div className={styles.links}>
    <Icon href={inUrl} src="/in.svg" />
    <Icon href={ghUrl} src="/gh.svg" />
    <Icon href={xUrl} src="/x.svg" />
  </div>
);

const Splash = ({ dramaticPause }) => (
  <>
    <div className={styles.intro}>
      <img src="/intro.svg" alt="Hi, I'm Kathleen." width={300} height={45} />
    </div>
    <div className={styles.fadegroup}>
      <div className={dramaticPause ? styles.fade1 : styles.quickfade1}>
        {aboutMe[0]}
      </div>
      <div className={dramaticPause ? styles.fade2 : styles.quickfade1}>
        {aboutMe[1]}
      </div>
      <div className={dramaticPause ? styles.fade3 : styles.quickfade2}>
        <CallToAction />
        <Arrow dramaticPause={dramaticPause} />
        <Links />
      </div>
    </div>
  </>
);

export default Splash;
