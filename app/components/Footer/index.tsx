'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Networks } from 'client-blog-library';
import * as yup from 'yup';

import { subscribe } from '@/service/email';
import { getLocation, transformPath } from '@/utils';
import { ROUTE, TEXT } from '@constants';
import networks from '@data/networks.json';

import styles from './styled.module.scss';
import commonStyles from '@/styles/common.module.scss';

const emailSchema = yup.string().email().required();

const {
  EMAIL,
  EMAIL_ERROR,
  EMAIL_PLACEHOLDER,
  SUBSCRIBE,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_OK,
  ADDRES,
  FOOTER_TITLE,
  RUSSIAN,
  ENGLISH,
} = TEXT;
const { facebook, instagram, linkedIn, twitter } = networks;

export const Footer = () => {
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const pathName = usePathname();
  const absoluePath = useMemo(() => transformPath(pathName), [pathName]);
  const location = useMemo(() => getLocation(pathName), [pathName]);

  const translateRoutes = useTranslations('Routes');
  const translateFooter = useTranslations('Footer');

  const addTemporaryMessage = (newMessage: string) => {
    setMessage(newMessage);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setEmail(value);
    setMessage('');
  };

  const handleOnBlur = () => {
    if (email) {
      try {
        emailSchema.validateSync(email);
      } catch (err) {
        addTemporaryMessage(EMAIL_ERROR);
      }
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      emailSchema.validateSync(email);
      subscribe(email)
        .then(() => {
          setEmail('');
          addTemporaryMessage(SUBSCRIBE_OK);
        })
        .catch(() => addTemporaryMessage(SUBSCRIBE_ERROR));
    } catch (err) {
      addTemporaryMessage(EMAIL_ERROR);
    }
  };

  return (
    <footer className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.title}>{TEXT.HEADER}</h6>
        <nav className={styles.navigation}>
          {Object.values(ROUTE).map(({ name, path }) => (
            <Link href={`/${location}/${path}`} key={name} className={styles.link}>
              {translateRoutes(name)}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.content}>
        <h3 className={styles.formTitle}>{translateFooter(FOOTER_TITLE)}</h3>
        <div className={styles.info}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              placeholder={translateFooter(EMAIL_PLACEHOLDER)}
              onChange={handleEmailChange}
              onBlur={handleOnBlur}
              value={email}
            />
            <button type="submit" className={commonStyles.button}>
              {translateFooter(SUBSCRIBE)}
            </button>
          </form>
          <p className={styles.error}>{message && translateFooter(message)}</p>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.info}>
          <Link
            className={`${styles.lang} ${pathName.includes(RUSSIAN) && styles.currentLang}`}
            href={`/${RUSSIAN}/${absoluePath}`}
          >
            {RUSSIAN}
          </Link>
          <Link
            className={`${styles.lang} ${pathName.includes(ENGLISH) && styles.currentLang}`}
            href={`/${ENGLISH}/${absoluePath}`}
          >
            {ENGLISH}
          </Link>
          <p className={styles.contact}>{ADDRES}</p>
          <p className={styles.contact}>{EMAIL}</p>
        </div>
        <div className={styles.networks}>
          <Networks
            twitter={twitter}
            instagram={instagram}
            facebook={facebook}
            linkedIn={linkedIn}
          />
        </div>
      </div>
    </footer>
  );
};
