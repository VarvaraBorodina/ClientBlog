import authors from '@data/authors.json';
import { useTranslations } from 'next-intl';
import React from 'react';

import { TEXT } from '@/constants';
import { Author, Post } from '@/types';

import styles from './styled.module.scss';

const { BY } = TEXT;

export const ShortcutPost = ({ post, full }: { post: Post; full: boolean }) => {
  const postAuthor = authors.find((author: Author) => author.id === post.author);
  const translate = useTranslations('Home');
  const translateMonth = useTranslations('Monthes');

  const { day, year, month } = post.creationDate;

  return (
    <div className={styles.container}>
      {full && <img src={post.image} alt="post" className={styles.image} />}
      <p className={styles.info}>
        {translate(BY)}
        <strong className={styles.accent}>{`${postAuthor?.name} ${postAuthor?.lastName}`}</strong>
        {` | ${translateMonth(String(month))} ${day}, ${year}`}
      </p>
      <h6 className={styles.title}>{post.title}</h6>
      {full && <p className={styles.description}>{post.description}</p>}
    </div>
  );
};
