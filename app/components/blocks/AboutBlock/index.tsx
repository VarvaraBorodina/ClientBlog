import { ROUTE, TEXT } from '@constants';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { AboutArticle } from '../AboutArticle';
import styles from './styled.module.scss';

const {
  ABOUT_US, MISION, READ_MORE, ABOUT_US_TITLE, MISION_TITLE, ABOUT_TEXT, MISION_TEXT,
} = TEXT;
const { ABOUT } = ROUTE;

export const AboutBlock = () => {
  const translate = useTranslations('Home');

  return (
    <section className={styles.container}>
      <div className={styles.lines}>
        <div className={styles.lightLine} />
        <div className={styles.darckLine} />
      </div>
      <div className={styles.background}>
        <div className={styles.content}>
          <AboutArticle
            subtitle={translate(ABOUT_US)}
            title={translate(ABOUT_US_TITLE)}
            text={translate(ABOUT_TEXT)}
          />
          <AboutArticle
            subtitle={translate(MISION)}
            title={translate(MISION_TITLE)}
            text={translate(MISION_TEXT)}
          />
        </div>
        <Link href={ABOUT.path} className={styles.link}>
          {translate(READ_MORE)}
        </Link>
      </div>
    </section>
  );
};
