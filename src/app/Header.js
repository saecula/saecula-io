import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const iconSize = 40;

const HeaderIcon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} width={iconSize} height={iconSize} />
  </Link>
);

const Header = () => (
  <header>
    <div className="header-group-left">
      <Link href="/">
        <Image src="/mascot.svg" width={iconSize} height={iconSize} />
      </Link>
    </div>
    <div className="header-group-right">
      <HeaderIcon href="https://www.github.com/saecula" src="/gh.svg" />
      <HeaderIcon href="https://www.linkedin.com/in/saecula/" src="/in.svg" />
      <HeaderIcon href="https://www.x.com/_saecula" src="/x.svg" />
    </div>
  </header>
);

export default Header;
