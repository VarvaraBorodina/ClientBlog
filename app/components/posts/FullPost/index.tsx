'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Author, Category, Post } from '@/types';
import { Typography } from '@components/Typography';
import { ICONS, TEXT } from '@constants';
import authors from '@data/authors.json';
import categories from '@data/categories.json';

import styles from './styled.module.scss';

const { POSTED_ON, AUTHOR_ALT } = TEXT;

export const FullPost = ({ post }: { post: Post }) => {
  const translate = useTranslations('Blog');
  const translateMonth = useTranslations('Monthes');
  const translateCategory = useTranslations('Categories');

  const { description, content, image, category, author, title } = post;
  const { day, month, year } = post.creationDate;

  const { icon, name: categoryName } = useMemo(
    () => categories.find(({ id }) => id === category) as Category,
    [category]
  );
  const {
    name,
    lastName,
    photo: authorImage,
  } = useMemo(() => authors.find(({ id }) => id === author) as Author, [author]);

  return (
    <article className={styles.container}>
      <div className={styles.postInfo}>
        <div className={styles.info}>
          <img className={styles.authorImage} alt={translate(AUTHOR_ALT)} src={authorImage} />
          <div className={styles.authorInfo}>
            <p className={styles.author}>{`${name} ${lastName}`}</p>
            <p className={styles.date}>
              {`${translate(POSTED_ON)}${translateMonth(String(month))} ${day}, ${year}`}
            </p>
          </div>
        </div>
        <h3 className={styles.postTitle}>{title}</h3>
        <div className={styles.category}>
          {ICONS[icon]}
          <p className={styles.categoryName}>{translateCategory(categoryName)}</p>
        </div>
      </div>
      <img className={styles.postImage} src={image} alt="post" />
      <div className={styles.postInfo}>
        <h6 className={styles.description}>{description}</h6>
        <Typography as="p">{content}</Typography>
      </div>
    </article>
  );
};
