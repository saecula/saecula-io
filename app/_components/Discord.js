'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import styles from './style.module.css';

// TODO: replace with the real invite link.
const discordUrl = 'https://discord.gg/rQ7XeKN6Rf';

const blobStill = '/blob-dance-still.png';
const blobGif = '/blob-dance.gif';

const Discord = () => {
  const session = useSession();

  const [hover, setHover] = useState(false);

  if (session.status !== 'authenticated') {
    return null;
  }

  return (
    <Link
      className={styles.discord}
      href={discordUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={hover ? blobGif : blobStill} width={24} height={24} alt="" />
      {/* preloads the gif so the first hover animates immediately */}
      <img src={blobGif} className={styles.preload} alt="" />
      <span>join kathleenland discord</span>
    </Link>
  );
};

export default Discord;
