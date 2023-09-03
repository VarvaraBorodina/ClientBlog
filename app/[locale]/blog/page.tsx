import posts from '@data/posts.json';
import React from 'react';

import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { CategoryPostsBlock } from '@/components/blocks/CategoryPostsBlock';
import { JoinBlock } from '@/components/blocks/JoinBlock';
import { MainPost } from '@/components/posts/MainPost';
import { TEXT } from '@/constants';

const { ALL_CATEGORIES, ALL_POST } = TEXT;

const Blog = () => {
  return (
    <div>
      <MainPost />
      <CategoriesBlock title={ALL_CATEGORIES} titleAlign="left" />
      <CategoryPostsBlock posts={posts} title={ALL_POST} />
      <JoinBlock />
    </div>
  );
};

export default Blog;
