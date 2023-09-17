'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getLocation } from '@/utils';
import { Typography } from '@components/Typography';
import { ROUTE, TEXT } from '@constants';

import styles from './styled.module.scss';
import commonStyles from '@/styles/common.module.scss';

const { JOIN_HEADER, JOIN_TEXT, JOUN_BUTTON } = TEXT;
const { CONTACT } = ROUTE;

export const JoinBlock = () => {
  const translate = useTranslations('Home');

  const pathName = usePathname();
  const location = useMemo(() => getLocation(pathName), [pathName]);

  return (
    <div className={styles.container}>
      <Typography as="h3">{translate(JOIN_HEADER)}</Typography>
      <Typography as="p">{translate(JOIN_TEXT)}</Typography>
      <Link href={`/${location}/${CONTACT.path}`} className={commonStyles.button}>
        {translate(JOUN_BUTTON)}
      </Link>
    </div>
  );
};
