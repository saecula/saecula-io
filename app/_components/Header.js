'use client';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './style.module.css';

// template
export function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return <button onClick={() => signIn('google')}>Sign in with Google</button>;
}

const iconSize = 38;

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <div className={styles.group}>
        <img src="/avatar.svg" width={iconSize} height={iconSize} />
      </div>
    </Link>
    <div className={styles.group} onClick={() => signIn('google')}>
      <img
        alt="Login with Google."
        src="/login.svg"
        width={iconSize}
        height={iconSize}
      />
    </div>
  </header>
);

export default Header;
