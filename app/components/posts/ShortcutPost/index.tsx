import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { Author, Post } from '@/types';
import { Typography } from '@components/Typography';
import { DINAMIC_ROUTES, TEXT } from '@constants';
import authors from '@data/authors.json';

import styles from './styled.module.scss';
import commonStyles from '@/styles/common.module.scss';

const { BY } = TEXT;
const { POST } = DINAMIC_ROUTES;

export const ShortcutPost = ({ post, full }: { post: Post; full: boolean }) => {
  const translate = useTranslations('Home');
  const translateMonth = useTranslations('Monthes');

  const postAuthor = authors.find((author: Author) => author.id === post.author);
  const { day, year, month } = post.creationDate;
  const { title, id, image } = post;

  return (
    <Link className={styles.container} href={`/${POST}/${id}`}>
      {full && <img src={image} alt={title} className={styles.image} />}
      <p className={styles.info}>
        {translate(BY)}
        <strong className={styles.accent}>{`${postAuthor?.name} ${postAuthor?.lastName}`}</strong>
        {` | ${translateMonth(String(month))} ${day}, ${year}`}
      </p>
      <h6 className={`${commonStyles.header} ${styles.title}`}>{post.title}</h6>
      {full && <Typography as="p">{post.description}</Typography>}
    </Link>
  );
};
