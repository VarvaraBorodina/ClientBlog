'use client';

import React, { memo, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Author } from 'client-blog-library';

import { Author as AuthorType } from '@/types';
import { getLocation } from '@/utils';
import { DINAMIC_ROUTES, TEXT } from '@constants';
import authors from '@data/authors.json';

import styles from './styled.module.scss';

const { AUTHORS, WRITTER } = TEXT;
const { AUTHOR } = DINAMIC_ROUTES;

export const AuthorsBlock = memo(({ authorsAmount }: { authorsAmount: number }) => {
  const translate = useTranslations('Home');
  const mainAuthors: AuthorType[] = useMemo(() => authors.slice(0, authorsAmount), [authorsAmount]);

  const pathName = usePathname();
  const location = useMemo(() => getLocation(pathName), [pathName]);

  const router = useRouter();

  const onAuthorClick = (id: number) => (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.tagName !== 'svg' && element.tagName !== 'path') {
      router.push(`/${location}/${AUTHOR}/${id}`);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{translate(AUTHORS)}</h3>
      <div className={styles.categories}>
        {mainAuthors.map((author) => (
          <button
            key={author.id}
            onClick={onAuthorClick(author.id)}
            type="button"
            className={styles.author}
          >
            <Author author={author} role={translate(WRITTER)} />
          </button>
        ))}
      </div>
    </div>
  );
});
