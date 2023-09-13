'use client';

import React, { memo, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Category } from 'client-blog-library';

import { Category as CategoryType } from '@/types';
import { getLocation } from '@/utils';
import { DINAMIC_ROUTES, ICONS } from '@constants';
import categories from '@data/categories.json';

import { CategoriesBlockProps } from './types';

import styles from './styled.module.scss';

const { CATEGORY } = DINAMIC_ROUTES;

export const CategoriesBlock = memo(({ title, titleAlign, column }: CategoriesBlockProps) => {
  const translate = useTranslations('Categories');

  const pathName = usePathname();
  const location = useMemo(() => getLocation(pathName), [pathName]);

  return (
    <div className={styles.container}>
      <h3 className={styles.header} style={{ textAlign: titleAlign }}>
        {translate(title)}
      </h3>
      <div className={`${styles.categories} ${column && styles.column}`}>
        {(categories as CategoryType[]).map(({ name, id, description, icon }) => (
          <Link href={`/${location}/${CATEGORY}/${id}`} key={id}>
            <Category
              category={{
                id,
                icon,
                description: translate(description),
                name: translate(name),
              }}
              full={!column}
              icon={ICONS[icon]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
});
