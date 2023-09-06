import React from 'react';

import { Networks } from '@/components/Networks';
import { Author as AuthorType } from '@/types';

import styles from './styled.module.scss';

export const Author = ({ author, role }: { author: AuthorType; role: string }) => {
  const { photo, name, lastName } = author;

  return (
    <div className={styles.container}>
      <img src={photo} alt={name} className={styles.image} />
      <p className={styles.title}>{`${name} ${lastName}`}</p>
      <p className={styles.description}>{role}</p>
      <Networks />
    </div>
  );
};
