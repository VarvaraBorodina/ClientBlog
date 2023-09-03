import { useTranslations } from 'next-intl';
import React from 'react';

import styles from './styled.module.scss';
import { ImageArticleProps } from './types';

export const ImageArticle = (props: ImageArticleProps) => {
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
        <h3 className={styles.title}>{translate(title)}</h3>
        <h6 className={styles.subtitle}>{translate(subtitle)}</h6>
        <p className={styles.description}>{translate(text)}</p>
      </div>
    </article>
  );
};
