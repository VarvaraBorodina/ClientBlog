import { useTranslations } from 'next-intl';
import React from 'react';

import { ASSETS, TEXT } from '@/constants';
import commonStyles from '@/styles/common.module.scss';

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
            <h6 className={commonStyles.subtitle}>{translate(ABOUT_US)}</h6>
            <h3 className={commonStyles.header}>{translate(ABOUT_US_TITLE)}</h3>
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
          <p className={commonStyles.description}>{translate(MISION_TEXT)}</p>
        </div>
      </div>
      <div className={styles.lines}>
        <div className={styles.darckLine} />
        <div className={styles.lightLine} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h6 className={commonStyles.subtitle}>{translate(MISION)}</h6>
          <h3 className={commonStyles.header}>{translate(MISION_TITLE)}</h3>
          <p className={commonStyles.description}>{translate(MISION_TEXT)}</p>
        </div>
        <div className={styles.info}>
          <h6 className={commonStyles.subtitle}>{translate(VISION)}</h6>
          <h3 className={commonStyles.header}>{translate(VISION_TITLE)}</h3>
          <p className={commonStyles.description}>{translate(MISION_TEXT)}</p>
        </div>
      </div>
    </section>
  );
};
