import React from 'react';

import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { JoinBlock } from '@/components/blocks/JoinBlock';
import { MainPost } from '@/components/posts/MainPost';
import { TEXT } from '@/constants';

const { ALL_CATEGORIES } = TEXT;

const Blog = () => {
  return (
    <div>
      <MainPost />
      <CategoriesBlock title={ALL_CATEGORIES} titleAlign="left" />
      <JoinBlock />
    </div>
  );
};

export default Blog;
