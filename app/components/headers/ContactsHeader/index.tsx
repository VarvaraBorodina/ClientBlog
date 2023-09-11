import React from 'react';
import { useTranslations } from 'next-intl';

import { Typography } from '@components/Typography';
import { TEXT } from '@constants';

import styles from './styled.module.scss';

const {
  EMAIL,
  PHONE,
  CONTACT_US,
  LET_START,
  CONTACTS_TEXT,
  WORKING_HOURS,
  WORKING_DAYS,
  WORKING_TIME,
  SUPPORT,
} = TEXT;

export const ContactsHeader = () => {
  const translate = useTranslations('Contacts');
  return (
    <>
      <div className={styles.formHeader}>
        <Typography as="h6">{translate(CONTACT_US)}</Typography>
        <Typography as="h3">{translate(LET_START)}</Typography>
        <Typography as="p">{translate(CONTACTS_TEXT)}</Typography>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contactsBlock}>
          <p className={styles.contactsInfo}>{translate(WORKING_HOURS)}</p>
          <div className={styles.line} />
          <h6 className={styles.contactsTitle}>{translate(WORKING_DAYS)}</h6>
          <h6 className={styles.contactsTitle}>{translate(WORKING_TIME)}</h6>
          <p className={styles.contactsInfo}>{translate(SUPPORT)}</p>
        </div>
        <div className={styles.contactsBlock}>
          <p className={styles.contactsInfo}>{translate(CONTACT_US)}</p>
          <div className={styles.line} />
          <h6 className={styles.contactsTitle}>{PHONE}</h6>
          <h6 className={styles.contactsInfo}>{EMAIL}</h6>
        </div>
      </div>
    </>
  );
};
