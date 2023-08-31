'use client';

import categories from '@data/categories.json';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Category } from '@/components/Category';
import { TEXT } from '@/constants';
import { Category as CategoryType } from '@/types';

import styles from './styled.module.scss';

const { CHOOSE_CATEGORY } = TEXT;

export const ChooseCategoryBlock = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{translate(CHOOSE_CATEGORY)}</h3>
      <div className={styles.categories}>
        {(categories as CategoryType[]).map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};
