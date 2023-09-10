'use client';

import { PARTNERS, TEXT } from '@constants';
import { useTranslations } from 'next-intl';
import React from 'react';

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
      {PARTNERS.map((partner, index) => (
        <span key={index} className={styles.logo}>
          {partner}
        </span>
      ))}
    </div>
  );
};
