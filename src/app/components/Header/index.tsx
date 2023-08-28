'use client';

import { Sen } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Modal } from '@/components/Modal';
import { ASSETS, ICONS, ROUTE, TEXT } from '@/constants';

import styles from './styled.module.scss';

const sen = Sen({ subsets: ['latin'] });

const { HEADER, VIDEO_BUTTON } = TEXT;
const { ABOUT_VEDEO } = ASSETS;
const { MENU, CLOSE } = ICONS;

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
            <source src={ABOUT_VEDEO} type="video/mp4" />
          </video>
        </Modal>
      )}
      <h1 className={styles.header}>{HEADER}</h1>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          {ROUTE.map(({ name, path }, index) => {
            if (index !== ROUTE.length - 1) {
              return (
                <Link
                  className={`${styles.link} ${pathName === path && styles.currentLink}`}
                  href={path}
                  key={name}
                >
                  {name}
                </Link>
              );
            }
            return null;
          })}
        </nav>
        <button type="button" className={`${styles.button} ${sen.className}`} onClick={toggleModal}>
          {VIDEO_BUTTON}
        </button>
      </div>
      <button type="button" className={styles.imgButton} onClick={toggleLeftSideBar}>
        {MENU}
      </button>
      {showLeftSideBar && (
        <div className={styles.rigthSideMenu}>
          <button type="button" className={styles.imgButton} onClick={toggleLeftSideBar}>
            {CLOSE}
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
            {VIDEO_BUTTON}
          </button>
        </div>
      )}
    </header>
  );
};
