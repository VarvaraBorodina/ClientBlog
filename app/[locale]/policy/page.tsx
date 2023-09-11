import { TEXT } from '@constants';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Typography } from '@/components/Typography';

import styles from './styled.module.scss';

const {
  POLICY_TEXT_BOTTOM,
  POLICY_TEXT_TOP,
  POLICY_TITLE_BOTTOM,
  POLICY_TITLE_TOP,
  PRIVACY_POLICY,
  LAST_UPDATED,
} = TEXT;

const Policy = () => {
  const translate = useTranslations('Policy');
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography as="h3">{translate(PRIVACY_POLICY)}</Typography>
        <Typography as="p">{translate(LAST_UPDATED)}</Typography>
      </div>
      <div className={styles.content}>
        <Typography as="h3">{translate(POLICY_TITLE_TOP)}</Typography>
        <Typography as="p">{translate(POLICY_TEXT_TOP)}</Typography>
        <Typography as="h3">{translate(POLICY_TITLE_BOTTOM)}</Typography>
        <Typography as="p">{translate(POLICY_TEXT_BOTTOM)}</Typography>
      </div>
    </div>
  );
};

export default Policy;
