'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { ROUTE, TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { JOIN_HEADER, JOIN_TEXT, JOUN_BUTTON } = TEXT;
const { CONTACT } = ROUTE;

export const JoinBlock = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <h3 className={commonStyles.header}>{translate(JOIN_HEADER)}</h3>
      <p className={commonStyles.description}>{translate(JOIN_TEXT)}</p>
      <Link href={CONTACT.path} className={commonStyles.button}>
        {translate(JOUN_BUTTON)}
      </Link>
    </div>
  );
};
