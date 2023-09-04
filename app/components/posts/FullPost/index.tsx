'use client';

import React from 'react';

import { ICONS } from '@/constants';
import { Post } from '@/types';

import styles from './styled.module.scss';

const { BUSINESS } = ICONS;

export const FullPost = ({ post }: { post: Post }) => {
  return (
    <article className={styles.container}>
      <div className={styles.postInfo}>
        <div className={styles.info}>
          <img className={styles.authorImage} alt="author" src={post.image} />
          <div className={styles.authorInfo}>
            <p className={styles.author}>Andrew Jonson</p>
            <p className={styles.date}>Posted on 27th January 2022</p>
          </div>
        </div>
        <h3 className={styles.postTitle}>Step-by-step guide to choosing great font pairs</h3>
        <div className={styles.category}>
          {BUSINESS}
          <p className={styles.categoryName}>Startup</p>
        </div>
      </div>
      <img className={styles.postImage} src={post.image} alt="post" />
      <div className={styles.postInfo}>
        <h6 className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </h6>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas
          congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
          sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
          parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
          egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
      </div>
    </article>
  );
};
