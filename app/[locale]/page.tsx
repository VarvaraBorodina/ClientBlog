import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

import { Server } from './components/Server';

const App = () => {
  const t = useTranslations('Index');
  return (
    <div>
      <Link href="/about" locale="de">
        De
      </Link>
      <Link href="/about" locale="en">
        En
      </Link>
      <p>{t('title')}</p>
      <Server />
    </div>
  );
};

export default App;
