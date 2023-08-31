import posts from '@data/posts.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { ShortcutPost } from '@/components/posts/ShortcutPost';
import { TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

export const FeaturePosts = () => {
  const translate = useTranslations('Home');
  return (
    <section className={styles.content}>
      <div className={styles.singlePost}>
        <h3 className={styles.title}>{translate(TEXT.FEATURE_POST)}</h3>
        <div className={styles.post}>
          <ShortcutPost post={posts[1]} full />
          <Link href="/" className={commonStyles.button}>
            {`${translate(TEXT.READ_MORE)}`}
          </Link>
        </div>
      </div>
      <aside className={styles.aside}>
        <div className={styles.sideTitle}>
          <h3 className={styles.title}>All posts</h3>
          <Link href="/" className={styles.accent}>
            {translate(TEXT.VIEW_ALL)}
          </Link>
        </div>
        <div className={styles.posts}>
          <div className={styles.shortPost}>
            <ShortcutPost post={posts[2]} full={false} />
          </div>
          <div className={styles.shortPost}>
            <ShortcutPost post={posts[3]} full={false} />
          </div>
          <div className={styles.shortPost}>
            <ShortcutPost post={posts[4]} full={false} />
          </div>
        </div>
      </aside>
    </section>
  );
};
