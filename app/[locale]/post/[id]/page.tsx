import posts from '@data/posts.json';
import { Mulish } from 'next/font/google';
import React from 'react';

import { JoinBlock } from '@/components/blocks/JoinBlock';
import { FullPost } from '@/components/posts/FullPost';
import { ShortcutPost } from '@/components/posts/ShortcutPost';

import styles from './styled.module.scss';

const mulish = Mulish({ subsets: ['latin'] });

const Post = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <FullPost post={posts[params.id]} />
      <h3 className={`${styles.title} ${mulish.className}`}>What to read next</h3>
      <div className={styles.container}>
        <ShortcutPost post={posts[0]} full />
        <ShortcutPost post={posts[1]} full />
        <ShortcutPost post={posts[2]} full />
      </div>
      <div className={styles.line} />
      <JoinBlock />
    </>
  );
};

export default Post;
