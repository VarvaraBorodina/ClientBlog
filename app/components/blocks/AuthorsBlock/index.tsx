'use client';

import { DINAMIC_ROUTES, TEXT } from '@constants';
import authors from '@data/authors.json';
import { Author } from 'client-blog-library';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';

import { Author as AuthorType } from '@/types';

import styles from './styled.module.scss';

const { AUTHORS, WRITTER } = TEXT;
const { AUTHOR } = DINAMIC_ROUTES;

export const AuthorsBlock = React.memo(({ authorsAmount }: { authorsAmount: number }) => {
  const translate = useTranslations('Home');
  const mainAuthors: AuthorType[] = useMemo(() => authors.slice(0, authorsAmount), [authorsAmount]);

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
});
