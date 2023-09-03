import { useTranslations } from 'next-intl';
import React from 'react';

import { ASSETS, TEXT } from '@/constants';

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
  ACTIVE_USER,
  BLOG_PUBLISHED,
} = TEXT;

export const AboutFullBlock = () => {
  const translate = useTranslations('Home');

  return (
    <section className={styles.container}>
      <img src={WHY_WE_STARTED} alt="people" className={styles.image} />
      <div className={styles.imageText}>
        <div className={styles.imageContent}>
          <div className={styles.imageHeaders}>
            <h6 className={styles.title}>{translate(ABOUT_US)}</h6>
            <h3 className={styles.header}>{translate(ABOUT_US_TITLE)}</h3>
          </div>
          <ul className={styles.numberList}>
            <li className={styles.numberListItem}>
              <h3 className={styles.number}>12+</h3>
              <p className={styles.description}>{translate(BLOG_PUBLISHED)}</p>
            </li>
            <li className={styles.numberListItem}>
              <h3 className={styles.number}>18K+</h3>
              <p className={styles.description}>{translate(VIEW_FIN)}</p>
            </li>
            <li className={styles.numberListItem}>
              <h3 className={styles.number}>30K+</h3>
              <p className={styles.description}>{translate(ACTIVE_USER)}</p>
            </li>
          </ul>
        </div>
        <div className={styles.imageDescription}>
          <p className={styles.description}>{translate(MISION_TEXT)}</p>
        </div>
      </div>
      <div className={styles.lines}>
        <div className={styles.darckLine} />
        <div className={styles.lightLine} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h6 className={styles.title}>{translate(MISION)}</h6>
          <h3 className={styles.header}>{translate(MISION_TITLE)}</h3>
          <p className={styles.description}>{translate(MISION_TEXT)}</p>
        </div>
        <div className={styles.info}>
          <h6 className={styles.title}>{translate(VISION)}</h6>
          <h3 className={styles.header}>{translate(VISION_TITLE)}</h3>
          <p className={styles.description}>{translate(MISION_TEXT)}</p>
        </div>
      </div>
    </section>
  );
};

/*
<img src={WHY_WE_STARTED} alt="people" className={styles.image} />
 <div className={styles.lines}>
        <div className={styles.lightLine} />
        <div className={styles.darckLine} />
      </div>
*/
