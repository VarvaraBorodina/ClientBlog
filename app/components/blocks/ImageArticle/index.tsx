import { Typography } from '@components/Typography';
import { useTranslations } from 'next-intl';
import React, { memo } from 'react';

import styles from './styled.module.scss';
import { ImageArticleProps } from './types';

export const ImageArticle = memo((props: ImageArticleProps) => {
  const { title, subtitle, text, image, type } = props;

  const translate = useTranslations('About');

  return (
    <article
      className={styles.container}
      style={{ flexDirection: type === 'right' ? 'row' : 'row-reverse' }}
    >
      {type === 'left' && <div className={styles.rect} />}
      {type === 'right' && <div className={styles.circle} />}
      <img src={image} alt="post" className={styles.image} />
      <div className={`${styles.content} ${type === 'right' && styles.marginLeft}`}>
        <Typography as="h3">{translate(title)}</Typography>
        <Typography as="h6">{translate(subtitle)}</Typography>
        <Typography as="p">{translate(text)}</Typography>
      </div>
    </article>
  );
});
