import { Typography } from '@components/Typography';
import React from 'react';

import styles from './styled.module.scss';
import { AboutArticleType } from './types';

export const AboutArticle = ({ title, subtitle, text }: AboutArticleType) => (
  <div className={styles.info}>
    <Typography as="h6">{subtitle}</Typography>
    <Typography as="h3">{title}</Typography>
    <Typography as="p">{text}</Typography>
  </div>
);
