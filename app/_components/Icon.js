import React from 'react';
import Link from 'next/link';

const Icon = ({ href, src }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} width={45} height={45} />
  </Link>
);

export default Icon;
