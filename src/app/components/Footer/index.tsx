'use client';

import Link from 'next/link';
import React from 'react';

import Facebook from '@/assets/facebook.svg';
import Instagram from '@/assets/instagram.svg';
import LinkedIn from '@/assets/linkedIn.svg';
import Twitter from '@/assets/twitter.svg';
import { ROUTE, TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.title}>{TEXT.HEADER}</h6>
        <nav className={styles.navigation}>
          {ROUTE.map(({ name, path }) => (
            <Link href={path} key={name} className={styles.link}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.content}>
        <h3 className={styles.formTitle}>
          Subscribe to our news letter to get latest updates and news
        </h3>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Enter Your Email" />
          <button type="submit" className={commonStyles.button}>
            Subscribe
          </button>
        </form>
      </div>
      <div className={styles.contacts}>
        <div>
          <p className={styles.contact}>Finstreet 118 2561 Fintown</p>
          <p className={styles.contact}>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className={styles.social}>
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
    </footer>
  );
};
