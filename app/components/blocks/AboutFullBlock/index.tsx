import React from 'react';
import { useTranslations } from 'next-intl';

import { Typography } from '@components/Typography';
import { ASSETS, TEXT } from '@constants';

import { AboutArticle } from '../AboutArticle';

import styles from './styled.module.scss';

const { WHY_WE_STARTED } = ASSETS;
const {
  MISION,
  MISION_TITLE,
  MISION_TEXT,
  ABOUT_US,
  ABOUT_US_TITLE,
  VISION,
  VISION_TITLE,
  VIEW_FIN,
  VIEW_FIN_NUMBER,
  ACTIVE_USER_NUMBER,
  BLOG_PUBLISHED_NUMBER,
  ACTIVE_USER,
  BLOG_PUBLISHED,
  PEOPLE_ALT,
} = TEXT;

export const AboutFullBlock = () => {
  const translate = useTranslations('Home');

  return (
    <section className={styles.container}>
      <img src={WHY_WE_STARTED} alt={translate(PEOPLE_ALT)} className={styles.image} />
      <div className={styles.imageText}>
        <div className={styles.imageContent}>
          <div className={styles.imageHeaders}>
            <Typography as="h6">{translate(ABOUT_US)}</Typography>
            <Typography as="h3">{translate(ABOUT_US_TITLE)}</Typography>
          </div>
          <ul className={styles.numberList}>
            <li className={styles.numberListItem}>
              <h3 className={styles.number}>{BLOG_PUBLISHED_NUMBER}</h3>
              <p className={styles.description}>{translate(BLOG_PUBLISHED)}</p>
            </li>
            <li className={styles.numberListItem}>
              <h3 className={styles.number}>{VIEW_FIN_NUMBER}</h3>
              <p className={styles.description}>{translate(VIEW_FIN)}</p>
            </li>
            <li className={styles.numberListItem}>
              <h3 className={styles.number}>{ACTIVE_USER_NUMBER}</h3>
              <p className={styles.description}>{translate(ACTIVE_USER)}</p>
            </li>
          </ul>
        </div>
        <div className={styles.imageDescription}>
          <Typography as="p">{translate(MISION_TEXT)}</Typography>
        </div>
      </div>
      <div className={styles.lines}>
        <div className={styles.darckLine} />
        <div className={styles.lightLine} />
      </div>
      <div className={styles.content}>
        <AboutArticle
          subtitle={translate(MISION)}
          title={translate(MISION_TITLE)}
          text={translate(MISION_TEXT)}
        />
        <AboutArticle
          subtitle={translate(VISION)}
          title={translate(VISION_TITLE)}
          text={translate(MISION_TEXT)}
        />
      </div>
    </section>
  );
};
