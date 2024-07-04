import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import icon from '../icon.svg';
import style from './style.module.css';

const HeaderIcon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} width={27} height={27} />
  </Link>
);

const Header = () => (
  <header className={style.header}>
    <div className={style['header-group-left']}>
      <Link href="/">
        <Image src={icon} width={30} height={30} />
      </Link>
    </div>
    <div className={style['header-group-right']}>
      <HeaderIcon href="https://www.github.com/saecula" src="/gh.svg" />
      <HeaderIcon href="https://www.linkedin.com/in/saecula/" src="/in.svg" />
      <HeaderIcon href="https://www.x.com/_saecula" src="/x.svg" />
    </div>
  </header>
);

export default Header;
