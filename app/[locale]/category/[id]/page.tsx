'use client';

import categories from '@data/categories.json';
import posts from '@data/posts.json';
import tags from '@data/tags.json';
import { Mulish } from 'next/font/google';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { PageProps } from '@/[locale]/types';
import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { CategoryPostsBlock } from '@/components/blocks/CategoryPostsBlock';
import { TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';
import { Post, Tag } from '@/types';

import styles from './styled.module.scss';

const mulish = Mulish({ subsets: ['latin'] });

const { NOT_FOUND, BLOG, NO_TAGS, ALL_TAGS, CATEGORIES, SEARCH_TAGS } = TEXT;
const MAX_TAGS_AMOUNT = 7;

const Category = ({ params: { id } }: PageProps) => {
  const translateNotFound = useTranslations(NOT_FOUND);
  const translate = useTranslations('Categories');

  const translatedTags = tags.map(({ name, id: tagId }) => ({
    name: translate(name),
    id: tagId,
  }));

  const [inputValue, setInputValue] = useState('');
  const [currentTag, setCurrentTag] = useState(0);
  const [currentTags, setCurrentTags] = useState<Tag[]>(translatedTags.slice(0, MAX_TAGS_AMOUNT));
  const [currentPosts, setCurrentPosts] = useState<Post[]>(posts);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setInputValue(value);

    if (value === '') {
      setCurrentTags(translatedTags.slice(0, MAX_TAGS_AMOUNT));
    } else {
      setCurrentTags(
        translatedTags.filter((tag) => tag.name.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };

  const toggleTag = (tagId: number) => () => {
    if (tagId === currentTag) {
      setCurrentTag(0);
      setCurrentPosts(posts);
    } else {
      setCurrentTag(tagId);
      setCurrentPosts(posts.filter((post) => post.tags.includes(Number(tagId))));
    }
  };

  const category = categories.find(({ id: categoryId }) => categoryId === Number(id));

  if (!category) {
    return <p className={commonStyles.notFound}>{translateNotFound(NOT_FOUND)}</p>;
  }

  const { name, description } = category;
  const categoryPosts = currentPosts.filter((post) => post.category === category.id);

  return (
    <div>
      <div className={styles.header}>
        <h3 className={`${styles.title}  ${mulish.className}`}>{translate(name)}</h3>
        <p className={commonStyles.description}>{translate(description)}</p>
        <h6 className={commonStyles.subtitle}>{`${translate(BLOG)} > ${translate(name)}`}</h6>
      </div>
      <div className={styles.container}>
        <div className={styles.posts}>
          <CategoryPostsBlock posts={categoryPosts} />
        </div>
        <div className={styles.search}>
          <input
            className={styles.input}
            placeholder={translate(SEARCH_TAGS)}
            value={inputValue}
            onChange={handleInputChange}
          />
          <h3 className={commonStyles.header}>{translate(ALL_TAGS)}</h3>
          <div className={styles.tags}>
            {!currentTags.length && <p className={styles.description}>{translate(NO_TAGS)}</p>}
            {currentTags.map((tag) => (
              <p
                className={`${styles.tag} ${tag.id === currentTag && styles.active}`}
                key={tag.id}
                onClick={toggleTag(tag.id)}
              >
                {tag.name}
              </p>
            ))}
          </div>
          <CategoriesBlock title={CATEGORIES} column titleAlign="left" />
        </div>
      </div>
    </div>
  );
};

export default Category;
