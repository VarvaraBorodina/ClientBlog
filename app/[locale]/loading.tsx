'use client';

import React from 'react';

import { ICONS } from '@constants';

import styles from './styled.module.scss';

const { LOADER } = ICONS;

export default function Loading() {
  return <div className={styles.loader}>{LOADER}</div>;
}
