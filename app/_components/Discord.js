'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import styles from './style.module.css';

// TODO: pick a new easter egg for logged-in users. Until then this renders nothing.
const easterEggUrl = null;

const blobStill = '/blob-dance-still.png';
const blobGif = '/blob-dance.gif';

const Discord = () => {
  const session = useSession();

  const [hover, setHover] = useState(false);

  if (session.status !== 'authenticated' || !easterEggUrl) {
    return null;
  }

  return (
    <Link
      className={styles.discord}
      href={easterEggUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={hover ? blobGif : blobStill} width={24} height={24} alt="" />
      {/* preloads the gif so the first hover animates immediately */}
      <img src={blobGif} className={styles.preload} alt="" />
      <span></span>
    </Link>
  );
};

export default Discord;
