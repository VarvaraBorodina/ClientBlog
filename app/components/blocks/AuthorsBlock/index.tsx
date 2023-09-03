import authors from '@data/authors.json';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Author } from '@/components/Author';
import { TEXT } from '@/constants';
import { Author as AuthorType } from '@/types';

import styles from './styled.module.scss';

const { AUTHORS } = TEXT;

export const AuthorsBlock = ({ authorsAmount }: { authorsAmount: number }) => {
  const translate = useTranslations('Home');
  const mainAuthors: AuthorType[] = authors.slice(0, authorsAmount);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{translate(AUTHORS)}</h3>
      <div className={styles.categories}>
        {mainAuthors.map((author) => (
          <Author author={author} key={author.id} />
        ))}
      </div>
    </div>
  );
};
