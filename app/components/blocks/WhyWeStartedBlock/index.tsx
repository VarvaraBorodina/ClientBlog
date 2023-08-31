import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { ASSETS, ROUTE, TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { WHY_WE_STARTED } = ASSETS;
const { WE_STARTED, WE_STARTED_HEADER, WE_STARTED_TEXT, DISCOVER } = TEXT;
const { ABOUT } = ROUTE;

export const WhyWeStarted = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <img src={WHY_WE_STARTED} alt="people" className={styles.image} />
      <div className={styles.content}>
        <h6 className={styles.title}>{translate(WE_STARTED)}</h6>
        <h3 className={styles.header}>{translate(WE_STARTED_HEADER)}</h3>
        <p className={styles.description}>{translate(WE_STARTED_TEXT)}</p>
        <Link href={ABOUT.path} className={commonStyles.button}>
          {translate(DISCOVER)}
        </Link>
      </div>
    </div>
  );
};
