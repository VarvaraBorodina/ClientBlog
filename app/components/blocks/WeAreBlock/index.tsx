'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { PARTNERS, TEXT } from '@constants';

import styles from './styled.module.scss';

const { WE, FEATURED_IN } = TEXT;

export const WeAre = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.text}>{translate(WE)}</p>
        <p className={styles.bold}>{translate(FEATURED_IN)}</p>
      </div>
      {PARTNERS.map(({ logo, name }) => (
        <span key={name} className={styles.logo}>
          {logo}
        </span>
      ))}
    </div>
  );
};
