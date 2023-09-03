'use client';

import React from 'react';

import { ICONS } from '@/constants';

import styles from './styled.module.scss';

const { INSTAGRAM, LINKED_IN, FACEBOOK, TWITTER } = ICONS;

export const Networks = () => {
  return (
    <div className={styles.social}>
      {FACEBOOK}
      {TWITTER}
      {INSTAGRAM}
      {LINKED_IN}
    </div>
  );
};
