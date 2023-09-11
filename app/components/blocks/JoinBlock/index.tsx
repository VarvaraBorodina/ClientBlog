'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Typography } from '@components/Typography';
import { ROUTE, TEXT } from '@constants';

import styles from './styled.module.scss';
import commonStyles from '@/styles/common.module.scss';

const { JOIN_HEADER, JOIN_TEXT, JOUN_BUTTON } = TEXT;
const { CONTACT } = ROUTE;

export const JoinBlock = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <Typography as="h3">{translate(JOIN_HEADER)}</Typography>
      <Typography as="p">{translate(JOIN_TEXT)}</Typography>
      <Link href={CONTACT.path} className={commonStyles.button}>
        {translate(JOUN_BUTTON)}
      </Link>
    </div>
  );
};
