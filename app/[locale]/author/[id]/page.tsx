'use client';

import { CategoryPostsBlock } from '@components/blocks/CategoryPostsBlock';
import { TEXT } from '@constants';
import authors from '@data/authors.json';
import posts from '@data/posts.json';
import { Networks } from 'client-blog-library';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';

import { PageProps } from '@/[locale]/types';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { MY_POSTS, NOT_FOUND, WELCOM, HELLO, AUTHOR_ALT } = TEXT;

const Author = ({ params: { id } }: PageProps) => {
  const translateNotFound = useTranslations(NOT_FOUND);
  const translate = useTranslations('Blog');

  const currentAuthor = useMemo(() => authors.find((author) => author.id === Number(id)), [id]);
  const authorPosts = useMemo(() => posts.filter(({ author }) => author === Number(id)), [id]);

  if (!currentAuthor) {
    return <p className={commonStyles.notFound}>{translateNotFound(NOT_FOUND)}</p>;
  }

  const { photo, name, lastName, description } = currentAuthor;

  return (
    <>
      <div className={styles.background}>
        <div className={styles.content}>
          <img src={photo} alt={translate(AUTHOR_ALT)} className={styles.image} />
          <div className={styles.authorInfo}>
            <h3 className={commonStyles.header}>
              {`${translate(HELLO)}${name} ${lastName}${translate(WELCOM)}`}
            </h3>
            <p className={commonStyles.description}>{description}</p>
            <div className={styles.networks}>
              <Networks />
            </div>
          </div>
        </div>
        <div className={styles.lines}>
          <div className={styles.lightLine} />
          <div className={styles.darckLine} />
        </div>
      </div>
      <div className={styles.container}>
        <CategoryPostsBlock posts={authorPosts} title={MY_POSTS} />
      </div>
    </>
  );
};

export default Author;
