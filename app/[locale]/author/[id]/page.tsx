import authors from '@data/authors.json';
import posts from '@data/posts.json';
import { useTranslations } from 'next-intl';
import React from 'react';

import { CategoryPostsBlock } from '@/components/blocks/CategoryPostsBlock';
import { Networks } from '@/components/Networks';
import { TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';
import { AuthorProps } from './types';

const { MY_POSTS, NOT_FOUND, WELCOM, HELLO } = TEXT;

const Author = ({ params: { id } }: AuthorProps) => {
  const translateNotFound = useTranslations(NOT_FOUND);
  const translate = useTranslations('Blog');

  const currentAuthor = authors.find((author) => author.id === Number(id));
  const authorPosts = posts.filter(({ author }) => author === Number(id));

  if (!currentAuthor) {
    return <p className={commonStyles.notFound}>{translateNotFound(NOT_FOUND)}</p>;
  }

  const { photo, name, lastName, description } = currentAuthor;

  return (
    <>
      <div className={styles.background}>
        <div className={styles.content}>
          <img src={photo} alt="author" className={styles.image} />
          <div className={styles.authorInfo}>
            <h3 className={styles.header}>
              {`${translate(HELLO)}${name} ${lastName}${translate(WELCOM)}`}
            </h3>
            <p className={styles.description}>{description}</p>
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
