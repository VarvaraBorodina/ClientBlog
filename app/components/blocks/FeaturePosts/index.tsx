import posts from '@data/posts.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { ShortcutPost } from '@/components/posts/ShortcutPost';
import { ROUTE, TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { FEATURE_POST, READ_MORE, VIEW_ALL } = TEXT;
const { BLOG } = ROUTE;

export const FeaturePosts = () => {
  const translate = useTranslations('Home');

  const recentPosts = posts.slice(2, 5);
  return (
    <section className={styles.content}>
      <div className={styles.singlePost}>
        <h3 className={styles.title}>{translate(FEATURE_POST)}</h3>
        <div className={styles.post}>
          <ShortcutPost post={posts[1]} full />
          <Link href="/" className={commonStyles.button}>
            {`${translate(READ_MORE)}`}
          </Link>
        </div>
      </div>
      <aside className={styles.aside}>
        <div className={styles.sideTitle}>
          <h3 className={styles.title}>All posts</h3>
          <Link href={BLOG.path} className={styles.accent}>
            {translate(VIEW_ALL)}
          </Link>
        </div>
        <div className={styles.posts}>
          {recentPosts.map((post) => (
            <div className={styles.shortPost}>
              <ShortcutPost post={post} full={false} />
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};
