import React from 'react';

import styles from './styled.module.scss';
import { ModalTypes } from './types';

export const Modal = ({ closeModal, children }: ModalTypes) => {
  const handleOnModalClick = (event: React.MouseEvent<HTMLElement>) => event.stopPropagation();

  return (
    <div onClick={closeModal} className={styles.container}>
      <div onClick={handleOnModalClick} className={styles.content}>
        {children}
      </div>
    </div>
  );
};
