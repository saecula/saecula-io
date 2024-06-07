import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import icon from './icon.svg';

import { x, linkedin, github } from './svg';

const xHref = 'https://www.x.com/_saecula';
const linkedinHref = 'https://www.linkedin.com/in/saecula/';
const githubHref = 'https://www.github.com/saecula';

const NavIcon = ({ href, src }) => (
  <nav>
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} width={30} height={30} />
    </Link>
  </nav>
);

const Header = () => (
  <header>
    <div>
      <Link href="/">
        <Image src={icon} width={30} height={30} />
      </Link>
    </div>
    <div>
      <NavIcon href={githubHref} src={github} />
      <NavIcon href={linkedinHref} src={linkedin} />
      <NavIcon href={xHref} src={x} />
    </div>
  </header>
);

export default Header;
