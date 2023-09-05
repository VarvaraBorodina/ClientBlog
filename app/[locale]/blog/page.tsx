import posts from '@data/posts.json';
import React from 'react';

import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { CategoryPostsBlock } from '@/components/blocks/CategoryPostsBlock';
import { JoinBlock } from '@/components/blocks/JoinBlock';
import { MainPost } from '@/components/posts/MainPost';
import { TEXT } from '@/constants';

import styles from './styled.module.scss';

const { ALL_CATEGORIES, ALL_POST } = TEXT;

const Blog = () => {
  return (
    <div>
      <MainPost />
      <div className={styles.container}>
        <CategoriesBlock title={ALL_CATEGORIES} titleAlign="left" column={false} />
        <CategoryPostsBlock posts={posts} title={ALL_POST} />
      </div>
      <JoinBlock />
    </div>
  );
};

export default Blog;
