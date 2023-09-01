import categories from '@data/categories.json';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Category, Post } from '@/types';

import styles from './styled.module.scss';

export const CategoryPost = ({ post }: { post: Post }) => {
  const postCategory = (categories as Category[]).find(
    (category: Category) => category.id === post.category
  );
  const translateCategory = useTranslations('Categories');

  return (
    <div className={styles.container}>
      <img src={post.image} alt="post" className={styles.image} />
      <div className={styles.content}>
        <p className={styles.category}>{translateCategory(postCategory?.name)}</p>
        <h6 className={styles.title}>{post.title}</h6>
        <p className={styles.description}>{post.description}</p>
      </div>
    </div>
  );
};
