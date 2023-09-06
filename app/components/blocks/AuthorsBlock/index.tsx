import authors from '@data/authors.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Author } from '@/components/Author';
import { DINAMIC_ROUTES, TEXT } from '@/constants';
import { Author as AuthorType } from '@/types';

import styles from './styled.module.scss';

const { AUTHORS, WRITTER } = TEXT;
const { AUTHOR } = DINAMIC_ROUTES;

export const AuthorsBlock = ({ authorsAmount }: { authorsAmount: number }) => {
  const translate = useTranslations('Home');
  const mainAuthors: AuthorType[] = authors.slice(0, authorsAmount);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{translate(AUTHORS)}</h3>
      <div className={styles.categories}>
        {mainAuthors.map((author) => (
          <Link key={author.id} href={`${AUTHOR}/${author.id}`}>
            <Author author={author} role={translate(WRITTER)} />
          </Link>
        ))}
      </div>
    </div>
  );
};
