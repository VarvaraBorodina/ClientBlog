import React from 'react';

import { Post } from '@/types';

import styles from './styled.module.scss';

export const CategoryPost = ({ post, category }: { post: Post; category: string }) => {
  const { image, title, description } = post;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
