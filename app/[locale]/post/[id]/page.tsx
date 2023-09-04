import posts from '@data/posts.json';
import { Mulish } from 'next/font/google';
import { useTranslations } from 'next-intl';
import React from 'react';

import { JoinBlock } from '@/components/blocks/JoinBlock';
import { FullPost } from '@/components/posts/FullPost';
import { ShortcutPost } from '@/components/posts/ShortcutPost';
import { TEXT } from '@/constants';
import { Post as PostType } from '@/types';

import styles from './styled.module.scss';

const mulish = Mulish({ subsets: ['latin'] });
const NEXT_POSTS_AMOUNT = 3;
const { READ_NEXT } = TEXT;

const Post = ({ params: { id } }: { params: { id: number } }) => {
  const translate = useTranslations('Blog');

  const currentPost = posts.find((post) => post.id === Number(id)) as PostType;
  const nextPosts = posts
    .filter(
      ({ category, id: postId }) => category === currentPost?.category && postId !== Number(id)
    )
    .slice(0, NEXT_POSTS_AMOUNT);

  return (
    <>
      <FullPost post={currentPost} />
      <h3 className={`${styles.title} ${mulish.className}`}>{translate(READ_NEXT)}</h3>
      <div className={styles.container}>
        {nextPosts.map((nextPost) => (
          <ShortcutPost post={nextPost} full />
        ))}
      </div>
      <div className={styles.line} />
      <JoinBlock />
    </>
  );
};

export default Post;
