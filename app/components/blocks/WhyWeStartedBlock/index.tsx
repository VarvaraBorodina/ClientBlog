import { ASSETS, ROUTE, TEXT } from '@constants';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { WHY_WE_STARTED } = ASSETS;
const { WE_STARTED, WE_STARTED_HEADER, WE_STARTED_TEXT, DISCOVER, PEOPLE_ALT } = TEXT;
const { ABOUT } = ROUTE;

export const WhyWeStarted = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <img src={WHY_WE_STARTED} alt={translate(PEOPLE_ALT)} className={styles.image} />
      <div className={styles.content}>
        <h6 className={commonStyles.subtitle}>{translate(WE_STARTED)}</h6>
        <h3 className={commonStyles.header}>{translate(WE_STARTED_HEADER)}</h3>
        <p className={commonStyles.description}>{translate(WE_STARTED_TEXT)}</p>
        <Link href={ABOUT.path} className={commonStyles.button}>
          {translate(DISCOVER)}
        </Link>
      </div>
    </div>
  );
};
