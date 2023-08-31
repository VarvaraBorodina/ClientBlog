'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { ICONS, TEXT } from '@/constants';
import { Author as AuthorType } from '@/types';

import styles from './styled.module.scss';

const { INSTAGRAM, LINKED_IN, FACEBOOK, TWITTER } = ICONS;
const { WRITTER } = TEXT;

export const Author = ({ author }: { author: AuthorType }) => {
  const { photo, name, lastName } = author;
  const translate = useTranslations('Home');

  return (
    <div className={styles.container}>
      <img src={photo} alt={name} className={styles.image} />
      <p className={styles.title}>{`${name} ${lastName}`}</p>
      <p className={styles.description}>{translate(WRITTER)}</p>
      <div className={styles.social}>
        {FACEBOOK}
        {TWITTER}
        {INSTAGRAM}
        {LINKED_IN}
      </div>
    </div>
  );
};
