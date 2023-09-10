import { TEXT } from '@constants';
import { useTranslations } from 'next-intl';
import React from 'react';

import commonStyles from '@/styles/common.module.scss';

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
        <h6 className={commonStyles.subtitle}>{translate(CONTACT_US)}</h6>
        <h3 className={styles.title}>{translate(LET_START)}</h3>
        <p className={commonStyles.description}>{translate(CONTACTS_TEXT)}</p>
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
