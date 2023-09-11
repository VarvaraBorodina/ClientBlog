'use client';

import { CategoryPostsBlock } from '@components/blocks/CategoryPostsBlock';
import { SearchTags } from '@components/SearchTags';
import { Typography } from '@components/Typography';
import { TEXT } from '@constants';
import categories from '@data/categories.json';
import posts from '@data/posts.json';
import { Mulish } from 'next/font/google';
import { useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';

import { PageProps } from '@/[locale]/types';
import commonStyles from '@/styles/common.module.scss';
import { Post } from '@/types';

import styles from './styled.module.scss';

const mulish = Mulish({ subsets: ['latin'] });

const { NOT_FOUND, BLOG } = TEXT;

const Category = ({ params: { id } }: PageProps) => {
  const translateNotFound = useTranslations(NOT_FOUND);
  const translate = useTranslations('Categories');

  const [currentPosts, setCurrentPosts] = useState<Post[]>(posts);

  const category = useMemo(
    () =>
      categories.find(({ id: categoryId }) => {
        const numberId = Number(id);
        return categoryId === numberId;
      }),
    [id]
  );
  const categoryPosts = useMemo(
    () => currentPosts.filter((post) => post.category === category?.id),
    [category, currentPosts]
  );
  const filterPosts = (tags: number[]) => {
    if (tags.length === 0) {
      setCurrentPosts(posts);
    } else {
      setCurrentPosts(() =>
        posts.filter(({ tags: postTags }) => {
          const hasTags = tags.reduce(
            (isChoosen, tag) => isChoosen && postTags.includes(tag),
            true
          );
          return hasTags;
        })
      );
    }
  };

  if (!category) {
    return <p className={commonStyles.notFound}>{translateNotFound(NOT_FOUND)}</p>;
  }

  const { name, description } = category;

  return (
    <>
      <div className={styles.header}>
        <h3 className={`${styles.title}  ${mulish.className}`}>{translate(name)}</h3>
        <Typography as="p">{translate(description)}</Typography>
        <Typography as="h6">{`${translate(BLOG)} > ${translate(name)}`}</Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.posts}>
          <CategoryPostsBlock posts={categoryPosts} />
        </div>
        <SearchTags onTagsChange={filterPosts} />
      </div>
    </>
  );
};

export default Category;
