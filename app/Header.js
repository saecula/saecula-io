'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './style.module.css';

const iconSize = 38;

const loggedOutIcon = '/loggedout.svg';
const loginIcon = '/login.svg';
const logoutIcon = '/logout.svg';

const login = () => signIn('google');
const logout = () => signOut();
const makeGreeting = (session) => {
  if (session.status === 'unauthenticated') {
    return {
      greeting: '[log in]',
      action: login,
      icon: loggedOutIcon,
      hoverIcon: loginIcon,
    };
  }
  if (session.data?.user?.name) {
    const greeting = 'hi, ' + session.data.user.name.split(' ')[0] + '.';
    return { greeting, action: logout, icon: loginIcon, hoverIcon: logoutIcon };
  }
  return {
    greeting: '',
    action: login,
    icon: loggedOutIcon,
    hoverIcon: loginIcon,
  };
};

const Header = () => {
  const session = useSession();

  const [hover, setHover] = useState(false);

  const { greeting, action, icon, hoverIcon } = useMemo(() => {
    return makeGreeting(session);
  }, [session]);

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.group}>
          <img src="/avatar.svg" width={iconSize} height={iconSize} />
        </div>
      </Link>
      <div className={styles.group} onClick={action}>
        {greeting && <div className={styles.greeting}>{greeting}</div>}
        <img
          alt="Login with Google, or logout."
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setTimeout(() => setHover(false), 300)}
          src={hover ? hoverIcon : icon}
          width={iconSize}
          height={iconSize}
        />
      </div>
    </header>
  );
};

export default Header;
