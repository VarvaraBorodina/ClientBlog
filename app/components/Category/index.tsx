'use client';

import React from 'react';

import { ICONS } from '@/constants';
import { Category as CategoryType } from '@/types';

import styles from './styled.module.scss';

export const Category = ({ category, full }: { category: CategoryType; full: boolean }) => {
  const { name, description, icon } = category;

  return (
    <div className={styles.container}>
      <div className={full ? '' : styles.flex}>
        <div className={styles.icon}>{ICONS[icon]}</div>
        <h6 className={styles.title}>{name}</h6>
      </div>
      {full && <p className={styles.description}>{description}</p>}
    </div>
  );
};
