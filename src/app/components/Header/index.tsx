import { Sen } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

import { ROUTE } from '@/constants';

import styles from './styled.module.scss';

const sen = Sen({ subsets: ['latin'] });

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.header}>Modsen Client Blog</h1>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          {ROUTE.map(({ name, path }) => (
            <Link className={styles.link} href={path}>
              {name}
            </Link>
          ))}
        </nav>
        <button type="button" className={`${styles.button} ${sen.className}`}>
          Video about us
        </button>
      </div>
    </header>
  );
};
