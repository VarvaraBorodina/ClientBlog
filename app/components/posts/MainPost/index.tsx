import authors from '@data/authors.json';
import posts from '@data/posts.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';
import { Author, Post } from '@/types';

import styles from './styled.module.scss';

const FEATURE_POST_INDEX = 1;

const { BY, READ_MORE, FEATURE_POST } = TEXT;

export const MainPost = () => {
  const translate = useTranslations('Home');
  const translateMonth = useTranslations('Monthes');

  const post: Post = posts[FEATURE_POST_INDEX];
  const { title, description } = post;
  const postAuthor = authors.find((author: Author) => author.id === post.author);

  const { day, year, month } = post.creationDate;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h6 className={styles.header}>{translate(FEATURE_POST)}</h6>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>
          {translate(BY)}
          <strong className={styles.accent}>{`${postAuthor?.name} ${postAuthor?.lastName}`}</strong>
          {` | ${translateMonth(String(month))} ${day}, ${year}`}
        </p>
        <p className={styles.description}>{description}</p>
        <Link href="/about" className={commonStyles.button}>
          {`${translate(READ_MORE)}`}
        </Link>
      </div>
      <img src={post.image} alt="post" className={styles.image} />
    </div>
  );
};
