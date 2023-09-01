'use client';

import categories from '@data/categories.json';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Category } from '@/components/Category';
import { Category as CategoryType } from '@/types';

import styles from './styled.module.scss';
import { CategoriesBlockProps } from './types';

export const CategoriesBlock = ({ title, titleAlign }: CategoriesBlockProps) => {
  const translate = useTranslations('Categories');
  return (
    <div className={styles.container}>
      <h3 className={styles.header} style={{ textAlign: titleAlign }}>
        {translate(title)}
      </h3>
      <div className={styles.categories}>
        {(categories as CategoryType[]).map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};
