'use client';

import categories from '@data/categories.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Category } from '@/components/Category';
import { DINAMIC_ROUTES } from '@/constants';
import { Category as CategoryType } from '@/types';

import styles from './styled.module.scss';
import { CategoriesBlockProps } from './types';

const { CATEGORY } = DINAMIC_ROUTES;

export const CategoriesBlock = ({ title, titleAlign, column }: CategoriesBlockProps) => {
  const translate = useTranslations('Categories');
  return (
    <div className={styles.container}>
      <h3 className={styles.header} style={{ textAlign: titleAlign }}>
        {translate(title)}
      </h3>
      <div className={`${styles.categories} ${column && styles.column}`}>
        {(categories as CategoryType[]).map(({ name, id, description, icon }) => (
          <Link href={`${CATEGORY}/${id}`} key={id}>
            <Category
              category={{ id, icon, description: translate(description), name: translate(name) }}
              full={!column}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
