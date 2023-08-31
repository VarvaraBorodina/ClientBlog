import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { ROUTE, TEXT } from '@/constants';

import styles from './styled.module.scss';

const { ABOUT_US, MISION, READ_MORE, ABOUT_US_TITLE, MISION_TITLE, ABOUT_TEXT, MISION_TEXT } = TEXT;
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
          <div className={styles.info}>
            <h6 className={styles.title}>{translate(ABOUT_US)}</h6>
            <h3 className={styles.header}>{translate(ABOUT_US_TITLE)}</h3>
            <p className={styles.description}>{translate(ABOUT_TEXT)}</p>
          </div>
          <div className={styles.info}>
            <h6 className={styles.title}>{translate(MISION)}</h6>
            <h3 className={styles.header}>{translate(MISION_TITLE)}</h3>
            <p className={styles.description}>{translate(MISION_TEXT)}</p>
          </div>
        </div>
        <Link href={ABOUT.path} className={styles.link}>
          {translate(READ_MORE)}
        </Link>
      </div>
    </section>
  );
};
