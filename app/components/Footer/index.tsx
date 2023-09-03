'use client';

import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import IntlLink from 'next-intl/link';
import React, { useState } from 'react';
import * as yup from 'yup';

import { Networks } from '@/components/Networks';
import { ROUTE, TEXT } from '@/constants';
import { CONFIG } from '@/constants/config';
import commonStyles from '@/styles/common.module.scss';
import { transformPath } from '@/utils';

import styles from './styled.module.scss';

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
} = TEXT;

const { NEXT_PUBLIC_EMAIL_KEY, NEXT_PUBLIC_EMAIL_SERVICE_ID, NEXT_PUBLIC_EMAIL_TEMPLATE_ID } =
  CONFIG;

export const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const pathName = usePathname();
  const absolutePath = transformPath(pathName);
  const translateRoutes = useTranslations('Routes');
  const translateFooter = useTranslations('Footer');

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setEmail(value);
    setMessage('');
  };

  const addTemporaryMessage = (newMessage: string) => {
    setMessage(newMessage);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      emailSchema.validateSync(email);
      emailjs
        .send(
          NEXT_PUBLIC_EMAIL_SERVICE_ID,
          NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          { email },
          NEXT_PUBLIC_EMAIL_KEY
        )
        .then(
          () => {
            setEmail('');
            addTemporaryMessage(SUBSCRIBE_OK);
          },
          () => addTemporaryMessage(SUBSCRIBE_ERROR)
        );
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
            <Link href={path} key={name} className={styles.link}>
              {translateRoutes(name)}
            </Link>
          ))}
        </nav>
      </div>
      <p className={styles.error}>{message && translateFooter(message)}</p>
      <div className={styles.content}>
        <h3 className={styles.formTitle}>{translateFooter(FOOTER_TITLE)}</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            placeholder={translateFooter(EMAIL_PLACEHOLDER)}
            onChange={handleEmailChange}
            value={email}
          />
          <button type="submit" className={commonStyles.button}>
            {translateFooter(SUBSCRIBE)}
          </button>
        </form>
      </div>
      <div className={styles.contacts}>
        <div>
          <IntlLink locale={TEXT.RUSSIAN} href={absolutePath} className={styles.lang}>
            {TEXT.RUSSIAN}
          </IntlLink>
          <IntlLink locale={TEXT.ENGLISH} href={absolutePath} className={styles.lang}>
            {TEXT.ENGLISH}
          </IntlLink>
          <p className={styles.contact}>{ADDRES}</p>
          <p className={styles.contact}>{EMAIL}</p>
        </div>
        <div className={styles.networks}>
          <Networks />
        </div>
      </div>
    </footer>
  );
};
