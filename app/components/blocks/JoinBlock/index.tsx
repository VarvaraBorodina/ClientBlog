'use client';

import { Typography } from '@components/Typography';
import { ROUTE, TEXT } from '@constants';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

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
