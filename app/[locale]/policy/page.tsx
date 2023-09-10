import { TEXT } from '@constants';
import { useTranslations } from 'next-intl';
import React from 'react';

import commonStyles from '@/styles/common.module.scss';

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
        <h3 className={commonStyles.header}>{translate(PRIVACY_POLICY)}</h3>
        <p className={commonStyles.description}>{translate(LAST_UPDATED)}</p>
      </div>
      <div className={styles.content}>
        <h3 className={commonStyles.header}>{translate(POLICY_TITLE_TOP)}</h3>
        <p className={commonStyles.description}>{translate(POLICY_TEXT_TOP)}</p>
        <h3 className={commonStyles.header}>{translate(POLICY_TITLE_BOTTOM)}</h3>
        <p className={commonStyles.description}>{translate(POLICY_TEXT_BOTTOM)}</p>
      </div>
    </div>
  );
};

export default Policy;
