import React from 'react';

import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { CategoryPostsBlock } from '@/components/blocks/CategoryPostsBlock';
import { JoinBlock } from '@/components/blocks/JoinBlock';
import { MainPost } from '@/components/posts/MainPost';
import { TEXT } from '@/constants';

const { ALL_CATEGORIES } = TEXT;

const Blog = () => {
  return (
    <div>
      <MainPost />
      <CategoriesBlock title={ALL_CATEGORIES} titleAlign="left" />
      <CategoryPostsBlock />
      <JoinBlock />
    </div>
  );
};

export default Blog;
