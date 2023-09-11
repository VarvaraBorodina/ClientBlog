import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Typography } from '@components/Typography';
import { ASSETS, ROUTE, TEXT } from '@constants';

import styles from './styled.module.scss';
import commonStyles from '@/styles/common.module.scss';

const { WHY_WE_STARTED } = ASSETS;
const { WE_STARTED, WE_STARTED_HEADER, WE_STARTED_TEXT, DISCOVER, PEOPLE_ALT } = TEXT;
const { ABOUT } = ROUTE;

export const WhyWeStarted = () => {
  const translate = useTranslations('Home');
  return (
    <div className={styles.container}>
      <img src={WHY_WE_STARTED} alt={translate(PEOPLE_ALT)} className={styles.image} />
      <div className={styles.content}>
        <Typography as="h6">{translate(WE_STARTED)}</Typography>
        <Typography as="h3">{translate(WE_STARTED_HEADER)}</Typography>
        <Typography as="p">{translate(WE_STARTED_TEXT)}</Typography>
        <Link href={ABOUT.path} className={commonStyles.button}>
          {translate(DISCOVER)}
        </Link>
      </div>
    </div>
  );
};
