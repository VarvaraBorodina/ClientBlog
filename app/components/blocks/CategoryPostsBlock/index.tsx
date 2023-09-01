'use client';

import posts from '@data/posts.json';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { CategoryPost } from '@/components/posts/CategoryPost';
import { TEXT } from '@/constants';

import styles from './styled.module.scss';

const POST_PER_PAGE = 5;
const { ALL_POST, PREV, NEXT } = TEXT;

export const CategoryPostsBlock = () => {
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
      <h3 className={styles.header}>{translate(ALL_POST)}</h3>
      <div className={styles.line} />
      <div className={styles.posts}>
        {pagePosts.map((post) => (
          <CategoryPost post={post} key={post.id} />
        ))}
      </div>
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
    </div>
  );
};
