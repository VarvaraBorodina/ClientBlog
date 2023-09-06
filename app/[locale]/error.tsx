'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { TEXT } from '@/constants';

import styles from './styled.module.scss';

const { ERROR } = TEXT;

export default () => {
  const translate = useTranslations('Error');
  return <h2 className={styles.error}>{translate(ERROR)}</h2>;
};
