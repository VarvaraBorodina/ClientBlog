import React, { lazy } from 'react';

import { CategoriesBlock } from '@components/blocks/CategoriesBlock';
import { CategoryPostsBlock } from '@components/blocks/CategoryPostsBlock';
import { MainPost } from '@components/posts/MainPost';
import { TEXT } from '@constants';
import posts from '@data/posts.json';

import styles from './styled.module.scss';

const { ALL_CATEGORIES, ALL_POST } = TEXT;

const JoinBlock = lazy(() =>
  import('@components/blocks/JoinBlock').then((module) => ({ default: module.JoinBlock }))
);

const Blog = () => (
  <>
    <MainPost />
    <div className={styles.container}>
      <CategoriesBlock title={ALL_CATEGORIES} titleAlign="left" column={false} />
      <CategoryPostsBlock posts={posts} title={ALL_POST} />
    </div>
    <JoinBlock />
  </>
);

export default Blog;
