'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Dropdown } from 'client-blog-library';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactsHeader } from '@/components/headers/ContactsHeader';
import { TEXT } from '@/constants';
import { sendEmail } from '@/service/email';

import { schema } from './schema';
import styles from './styled.module.scss';
import { ContactFormType } from './types';

const QUERY_RELATED = ['1', '2', '3'];
const {
  NAME_PLACEHOLDER,
  FULL_EMAIL_PLACEHOLDER,
  MESSAGE_PLACEHOLDER,
  QUERY_PLACEHOLDER,
  SEND,
  CONTACT_ERROR,
  SENDING,
  SENDING_OK,
} = TEXT;

export const ContactForm = () => {
  const [serviceMessage, setServiceMessage] = useState('');
  const translate = useTranslations('Contacts');
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: yupResolver(schema),
  });

  const handleDropdownChange = (newValue: string) => {
    setValue('query', newValue);
    clearErrors('query');
    return true;
  };

  const submit = (formFields: ContactFormType) => {
    setServiceMessage(SENDING);
    sendEmail(formFields)
      .then(() => {
        setServiceMessage(SENDING_OK);
      })
      .catch(() => {
        setServiceMessage(CONTACT_ERROR);
      });
  };

  const { name, email, query, message } = errors;

  return (
    <div className={styles.container}>
      <ContactsHeader />
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <p className={styles.message}>{serviceMessage && translate(serviceMessage)}</p>
        <input
          className={styles.input}
          placeholder={translate(NAME_PLACEHOLDER)}
          {...register('name')}
        />
        <p className={styles.message}>{name && translate(name?.message)}</p>
        <input
          className={styles.input}
          placeholder={translate(FULL_EMAIL_PLACEHOLDER)}
          {...register('email')}
        />
        <p className={styles.message}>{email && translate(email?.message)}</p>
        <Dropdown
          title={translate(QUERY_PLACEHOLDER)}
          changeOption={handleDropdownChange}
          options={QUERY_RELATED}
        />
        <p className={styles.message}>{query && translate(query?.message)}</p>
        <textarea
          className={styles.input}
          placeholder={translate(MESSAGE_PLACEHOLDER)}
          {...register('message')}
        />
        <p className={styles.message}>{message && translate(message?.message)}</p>
        <button className={styles.button} type="submit">
          {translate(SEND)}
        </button>
      </form>
    </div>
  );
};
