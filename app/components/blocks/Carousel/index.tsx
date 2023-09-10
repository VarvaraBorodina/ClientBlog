'use client';

import { ICONS, TEXT } from '@constants';
import reviews from '@data/review.json';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import commonStyles from '@/styles/common.module.scss';

import styles from './styled.module.scss';

const { NEXT_ARROW, BACK_ARROW } = ICONS;
const ITEM_WIDTH = 100;

const {
  TESTIMONIAL, TESTIMONIAL_TEXT, TESTIMONIAL_TITLE, USER_ALT,
} = TEXT;

export const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const translate = useTranslations('Home');

  const onNextClick = () => {
    setOffset((prevOffset) => {
      if (prevOffset - ITEM_WIDTH >= -ITEM_WIDTH * (reviews.length - 1)) {
        return prevOffset - ITEM_WIDTH;
      }

      return prevOffset;
    });
  };

  const onBackClick = () => {
    setOffset((prevOffset) => {
      if (prevOffset + ITEM_WIDTH <= 0) {
        return prevOffset + ITEM_WIDTH;
      }
      return prevOffset;
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h6 className={commonStyles.subtitle}>{translate(TESTIMONIAL)}</h6>
        <h3 className={commonStyles.header}>{translate(TESTIMONIAL_TITLE)}</h3>
        <p className={commonStyles.description}>{translate(TESTIMONIAL_TEXT)}</p>
      </div>
      <div className={styles.line} />
      <div className={styles.window}>
        <div className={styles.slider} style={{ transform: `translateX(${offset}%)` }}>
          {reviews.map(({
            id, user, city, review, photo,
          }) => (
            <div className={styles.review} key={id}>
              <p className={styles.text}>{review}</p>
              <div className={styles.footer}>
                <div className={styles.user}>
                  <img src={photo} alt={translate(USER_ALT)} />
                  <div className={styles.userInfo}>
                    <p className={styles.name}>{user}</p>
                    <p className={styles.city}>{city}</p>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.button} type="button" onClick={onBackClick}>
                    {BACK_ARROW}
                  </button>
                  <button className={styles.button} type="button" onClick={onNextClick}>
                    {NEXT_ARROW}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
