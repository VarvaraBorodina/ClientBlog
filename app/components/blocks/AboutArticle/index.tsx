import React from 'react';

import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';
import { AboutArticleType } from './types';

export const AboutArticle = ({ title, subtitle, text }: AboutArticleType) => (
  <div className={styles.info}>
    <h6 className={commonStyles.subtitle}>{subtitle}</h6>
    <h3 className={commonStyles.header}>{title}</h3>
    <p className={commonStyles.description}>{text}</p>
  </div>
);
