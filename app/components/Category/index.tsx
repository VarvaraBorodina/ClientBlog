'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { DINAMIC_ROUTES, ICONS } from '@/constants';
import { Category as CategoryType } from '@/types';

import styles from './styled.module.scss';

const { CATEGORY } = DINAMIC_ROUTES;

export const Category = ({ category }: { category: CategoryType }) => {
  const { name, description, icon, id } = category;

  const translate = useTranslations('Categories');

  return (
    <Link className={styles.container} href={`${CATEGORY}/${id}`}>
      <div className={styles.icon}>{ICONS[icon]}</div>
      <h6 className={styles.title}>{translate(name)}</h6>
      <p className={styles.description}>{translate(description)}</p>
    </Link>
  );
};
