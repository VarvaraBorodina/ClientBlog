'use client';

import { Sen } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Close from '@/assets/close.svg';
import Menu from '@/assets/menu.svg';
import { Modal } from '@/components/Modal';
import { ASSETS, ROUTE, TEXT } from '@/constants';

import styles from './styled.module.scss';

const sen = Sen({ subsets: ['latin'] });

export const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLeftSideBar, setShowLeftSideBar] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    setShowLeftSideBar(false);
  }, [pathName]);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleLeftSideBar = () => {
    setShowLeftSideBar((prevState) => !prevState);
  };

  return (
    <header className={styles.container}>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <video className={styles.video} controls autoPlay>
            <track kind="captions" />
            <source src={ASSETS.ABOUT_VEDEO} type="video/mp4" />
          </video>
        </Modal>
      )}
      <h1 className={styles.header}>{TEXT.HEADER}</h1>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          {ROUTE.map(({ name, path }) => (
            <Link
              className={`${styles.link} ${pathName === path && styles.currentLink}`}
              href={path}
              key={name}
            >
              {name}
            </Link>
          ))}
        </nav>
        <button type="button" className={`${styles.button} ${sen.className}`} onClick={toggleModal}>
          {TEXT.VIDEO_BUTTON}
        </button>
      </div>
      <button type="button" className={styles.imgButton} onClick={toggleLeftSideBar}>
        <Menu />
      </button>
      {showLeftSideBar && (
        <div className={styles.rigthSideMenu}>
          <button type="button" className={styles.imgButton} onClick={toggleLeftSideBar}>
            <Close />
          </button>
          {ROUTE.map(({ name, path }) => (
            <Link
              className={`${styles.link} ${pathName === path && styles.currentLink}`}
              href={path}
              key={name}
            >
              {name}
            </Link>
          ))}
          <button
            type="button"
            className={`${styles.button} ${sen.className}`}
            onClick={toggleModal}
          >
            {TEXT.VIDEO_BUTTON}
          </button>
        </div>
      )}
    </header>
  );
};
