import authors from '@data/authors.json';
import categories from '@data/categories.json';
import data from '@data/posts.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';
import { Author, Category, Post } from '@/types';

import styles from './styled.module.scss';

export const HomePageHeader = () => {
  const post: Post = data[0];

  const translate = useTranslations('Home');

  const postCategory = categories.find((category: Category) => category.id === post.category);
  const postAuthor = authors.find((author: Author) => author.id === post.author);

  return (
    <div className={styles.container}>
      <img alt={translate(TEXT.POST_ALT)} src={post.image} className={styles.image} />

      <div className={styles.shadow}>
        <div className={styles.content}>
          <h6 className={styles.category}>
            {translate(TEXT.POSTED)}
            <strong className={styles.bold}>{postCategory?.name}</strong>
          </h6>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              {translate(TEXT.BY)}
              <strong className={styles.accent}>
                {`${postAuthor?.name} ${postAuthor?.lastName}`}
              </strong>
              {` | ${post.creationDate}`}
            </p>
          </div>
          <p className={styles.description}>{post.description}</p>
          <Link href="/about" className={commonStyles.button}>
            {`${translate(TEXT.READ_MORE)} >`}
          </Link>
        </div>
      </div>
    </div>
  );
};
