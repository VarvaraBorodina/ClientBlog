import { useTranslations } from 'next-intl';
import React from 'react';

export const Server = () => {
  const t = useTranslations('Index');
  return <p>{t('title')}</p>;
};
