import categories from '@data/categories.json';
import posts from '@data/posts.json';
import { Mulish } from 'next/font/google';
import { useTranslations } from 'next-intl';
import React from 'react';

import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { CategoryPostsBlock } from '@/components/blocks/CategoryPostsBlock';
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

  const { name, description } = category;
  const categoryPosts = posts.filter((post) => post.category === category.id);

  return (
    <div>
      <div className={styles.header}>
        <h3 className={`${styles.title} ${mulish.className}`}>{translate(name)}</h3>
        <p className={styles.description}>{translate(description)}</p>
        <h6 className={styles.subtitle}>{`${translate(BLOG)} > ${translate(name)}`}</h6>
      </div>
      <div className={styles.container}>
        <div className={styles.posts}>
          <CategoryPostsBlock posts={categoryPosts} />
        </div>
        <div className={styles.search}>
          <input className={styles.input} placeholder="Search tags" />
          <h3 className={styles.tagsTitle}>All tags</h3>
          <div className={styles.tags}>
            <p className={`${styles.tag} ${styles.active}`}>Life</p>
            <p className={styles.tag}>Business</p>
            <p className={styles.tag}>Screen</p>
            <p className={styles.tag}>Sport</p>
            <p className={styles.tag}>IT</p>
            <p className={styles.tag}>Work</p>
            <p className={styles.tag}>Design</p>
          </div>
          <CategoriesBlock title="111" column titleAlign="left" />
        </div>
      </div>
    </div>
  );
};

export default Category;
