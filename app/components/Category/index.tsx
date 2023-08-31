'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { ICONS } from '@/constants';
import { Category as CategoryType } from '@/types';

import styles from './styled.module.scss';

export const Category = ({ category }: { category: CategoryType }) => {
  const { name, description, icon } = category;

  const translate = useTranslations('Categories');

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{ICONS[icon]}</div>
      <h6 className={styles.title}>{translate(name)}</h6>
      <p className={styles.description}>{translate(description)}</p>
    </div>
  );
};
