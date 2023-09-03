import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Networks } from '@/components/Networks';
import { DINAMIC_ROUTES, TEXT } from '@/constants';
import { Author as AuthorType } from '@/types';

import styles from './styled.module.scss';

const { WRITTER } = TEXT;
const { AUTHOR } = DINAMIC_ROUTES;

export const Author = ({ author }: { author: AuthorType }) => {
  const { photo, name, lastName, id } = author;
  const translate = useTranslations('Home');

  return (
    <Link className={styles.container} href={`${AUTHOR}/${id}`}>
      <img src={photo} alt={name} className={styles.image} />
      <p className={styles.title}>{`${name} ${lastName}`}</p>
      <p className={styles.description}>{translate(WRITTER)}</p>
      <Networks />
    </Link>
  );
};
