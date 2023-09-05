import categories from '@data/categories.json';
import { Mulish } from 'next/font/google';
import { useTranslations } from 'next-intl';
import React from 'react';

import { TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { NOT_FOUND, BLOG } = TEXT;
const mulish = Mulish({ subsets: ['latin'] });

const Category = ({ params: { id } }: { params: { id: number } }) => {
  const translateNotFound = useTranslations(NOT_FOUND);
  const translate = useTranslations('Categories');

  const category = categories.find(({ id: categoryId }) => categoryId === Number(id));

  if (!category) {
    return <p className={commonStyles.notFound}>{translateNotFound(NOT_FOUND)}</p>;
  }
  return (
    <div>
      <div className={styles.header}>
        <h3 className={`${styles.title} ${mulish.className}`}>{translate(category.name)}</h3>
        <p className={styles.description}>{translate(category.description)}</p>
        <h6 className={styles.subtitle}>{`${translate(BLOG)} > ${translate(category.name)}`}</h6>
      </div>
    </div>
  );
};

export default Category;
