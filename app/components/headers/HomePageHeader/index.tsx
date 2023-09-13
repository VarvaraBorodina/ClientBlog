import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { Author, Category, Post } from '@/types';
import { DINAMIC_ROUTES, TEXT } from '@constants';
import authors from '@data/authors.json';
import categories from '@data/categories.json';
import posts from '@data/posts.json';

import styles from './styled.module.scss';
import commonStyles from '@/styles/common.module.scss';

const { POST_ALT, POSTED, BY, READ_MORE } = TEXT;
const { POST } = DINAMIC_ROUTES;

export const HomePageHeader = () => {
  const post: Post = posts[0];

  const translate = useTranslations('Home');
  const translateMonth = useTranslations('Monthes');
  const translateCategory = useTranslations('Categories');

  const postCategory = (categories as Category[]).find(
    (category: Category) => category.id === post.category
  );
  const postAuthor = authors.find((author: Author) => author.id === post.author);

  const { day, year, month } = post.creationDate;

  return (
    <div className={styles.container}>
      <img alt={translate(POST_ALT)} src={post.image} className={styles.image} />

      <div className={styles.shadow}>
        <div className={styles.content}>
          <h6 className={styles.category}>
            {translate(POSTED)}
            <strong className={styles.bold}>{translateCategory(postCategory?.name)}</strong>
          </h6>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              {translate(BY)}
              <strong className={styles.accent}>
                {`${postAuthor?.name} ${postAuthor?.lastName}`}
              </strong>
              {` | ${translateMonth(String(month))} ${day}, ${year}`}
            </p>
          </div>
          <p className={styles.description}>{post.description}</p>
          <Link href={`/${POST}/${post.id}`} className={commonStyles.button}>
            {`${translate(READ_MORE)}`}
          </Link>
        </div>
      </div>
    </div>
  );
};
