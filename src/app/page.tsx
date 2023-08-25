import React from 'react';

import { Test } from '@/components/Test';

import styles from './styled.module.scss';

const App = () => {
  return (
    <div>
      <p className={styles.content}>Hello</p>
      <Test />
    </div>
  );
};

export default App;
