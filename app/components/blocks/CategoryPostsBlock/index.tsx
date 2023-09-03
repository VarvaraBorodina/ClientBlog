'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { CategoryPost } from '@/components/posts/CategoryPost';
import { TEXT } from '@/constants';

import styles from './styled.module.scss';
import { CategoryPostBlockType } from './types';

const POST_PER_PAGE = 5;
const { PREV, NEXT, NO_POST } = TEXT;

export const CategoryPostsBlock = ({ title, posts }: CategoryPostBlockType) => {
  const translate = useTranslations('Blog');

  const [firstPost, setFirstPost] = useState(0);

  const onNextClick = () => {
    setFirstPost((prevFirstPost) => prevFirstPost + POST_PER_PAGE);

    window.scrollTo(0, 0);
  };

  const onPrevClick = () => {
    setFirstPost((prevFirstPost) => prevFirstPost - POST_PER_PAGE);

    window.scrollTo(0, 0);
  };

  const pagePosts = posts.slice(firstPost, firstPost + POST_PER_PAGE);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{translate(title)}</h3>
      <div className={styles.line} />
      {!posts.length ? (
        <p className={styles.notPosts}>{translate(NO_POST)}</p>
      ) : (
        <div className={styles.posts}>
          {pagePosts.map((post) => (
            <CategoryPost post={post} key={post.id} />
          ))}
        </div>
      )}
      {posts.length > POST_PER_PAGE && (
        <div className={styles.buttons}>
          <button
            className={styles.button}
            type="button"
            onClick={onPrevClick}
            disabled={firstPost === 0}
          >
            {translate(PREV)}
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={onNextClick}
            disabled={firstPost + POST_PER_PAGE > posts.length}
          >
            {translate(NEXT)}
          </button>
        </div>
      )}
    </div>
  );
};
