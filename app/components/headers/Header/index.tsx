'use client';

import { Modal } from '@components/Modal';
import {
  ASSETS, ICONS, ROUTE, TEXT,
} from '@constants';
import { Mulish } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useEffect, useMemo, useState } from 'react';

import { transformPath } from '@/utils';

import styles from './styled.module.scss';

const mulish = Mulish({ subsets: ['latin'] });

const { HEADER, VIDEO_BUTTON } = TEXT;
const { ABOUT_VEDEO } = ASSETS;
const { MENU, CLOSE } = ICONS;

export const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLeftSideBar, setShowLeftSideBar] = useState<boolean>(false);
  const pathName = usePathname();
  const absolutePath = useMemo(() => transformPath(pathName), [pathName]);

  const translateRoutes = useTranslations('Routes');
  const translateHeader = useTranslations('Header');

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
          {Object.values(ROUTE).map(({ name, path }, index) => {
            if (index !== Object.values(ROUTE).length - 1) {
              return (
                <Link
                  className={`${styles.link} ${absolutePath === path && styles.currentLink}`}
                  href={path}
                  key={name}
                >
                  {translateRoutes(name)}
                </Link>
              );
            }
            return null;
          })}
        </nav>
        <button
          type="button"
          className={`${styles.button} ${mulish.className}`}
          onClick={toggleModal}
        >
          {translateHeader(VIDEO_BUTTON)}
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
          {Object.values(ROUTE).map(({ name, path }) => (
            <Link
              className={`${styles.link} ${absolutePath === path && styles.currentLink}`}
              href={path}
              key={name}
            >
              {translateRoutes(name)}
            </Link>
          ))}
          <button
            type="button"
            className={`${styles.button} ${mulish.className}`}
            onClick={toggleModal}
          >
            {translateHeader(VIDEO_BUTTON)}
          </button>
        </div>
      )}
    </header>
  );
};
