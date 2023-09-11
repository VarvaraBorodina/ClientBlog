'use client';

import { DINAMIC_ROUTES, TEXT } from '@constants';
import categories from '@data/categories.json';
import { CategoryPost } from 'client-blog-library';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';

import styles from './styled.module.scss';
import { CategoryPostBlockType } from './types';

const POST_PER_PAGE = 5;
const { PREV, NEXT, NO_POST } = TEXT;
const { POST } = DINAMIC_ROUTES;

const getCategory = (postCategory: number) => categories.find(({ id }) => postCategory === id);

export const CategoryPostsBlock = ({ title, posts }: CategoryPostBlockType) => {
  const translate = useTranslations('Blog');
  const translateCategory = useTranslations('Categories');

  const [firstPost, setFirstPost] = useState(0);

  const onChangePageClick = (direction: 1 | -1) => () => {
    setFirstPost((prevFirstPost) => prevFirstPost + direction * POST_PER_PAGE);

    window.scrollTo(0, 0);
  };

  const pagePosts = useMemo(
    () => posts.slice(firstPost, firstPost + POST_PER_PAGE),
    [firstPost, posts]
  );

  return (
    <div className={styles.container}>
      {title && (
        <>
          <h3 className={styles.header}>{translate(title)}</h3>
          <div className={styles.line} />
        </>
      )}
      {!posts.length ? (
        <p className={styles.notPosts}>{translate(NO_POST)}</p>
      ) : (
        <div className={styles.posts}>
          {pagePosts.map((post) => (
            <Link href={`${POST}/${post.id}`} key={post.id}>
              <CategoryPost
                post={post}
                category={translateCategory(getCategory(post.category)?.name)}
              />
            </Link>
          ))}
        </div>
      )}
      {posts.length > POST_PER_PAGE && (
        <div className={styles.buttons}>
          <button
            className={styles.button}
            type="button"
            onClick={onChangePageClick(-1)}
            disabled={firstPost === 0}
          >
            {translate(PREV)}
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={onChangePageClick(1)}
            disabled={firstPost + POST_PER_PAGE > posts.length}
          >
            {translate(NEXT)}
          </button>
        </div>
      )}
    </div>
  );
};
