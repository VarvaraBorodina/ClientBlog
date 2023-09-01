'use client';

import React from 'react';

import BackArrow from '@/assets/backArrow.svg';
import Business from '@/assets/categories/business.svg';
import Economy from '@/assets/categories/economy.svg';
import StartUp from '@/assets/categories/startup.svg';
import Technology from '@/assets/categories/technology.svg';
import Close from '@/assets/close.svg';
import Facebook from '@/assets/facebook.svg';
import Instagram from '@/assets/instagram.svg';
import LinkedIn from '@/assets/linkedIn.svg';
import Menu from '@/assets/menu.svg';
import NextArrow from '@/assets/nextArrow.svg';
import LogoBall from '@/assets/partners/logoBall.svg';
import LogoDrop from '@/assets/partners/logoDrop.svg';
import LogoHalf from '@/assets/partners/logoHalf.svg';
import LogoMap from '@/assets/partners/logoMap.svg';
import LogoSun from '@/assets/partners/logoSun.svg';
import Twitter from '@/assets/twitter.svg';

export const ICONS = {
  FACEBOOK: <Facebook />,
  INSTAGRAM: <Instagram />,
  LINKED_IN: <LinkedIn />,
  TWITTER: <Twitter />,
  CLOSE: <Close />,
  MENU: <Menu />,

  BUSINESS: <Business />,
  ECONOMY: <Economy />,
  STARTUP: <StartUp />,
  TECHNOLOGY: <Technology />,

  PARTNERS: [<LogoBall />, <LogoDrop />, <LogoHalf />, <LogoMap />, <LogoSun />],

  NEXT_ARROW: <NextArrow />,
  BACK_ARROW: <BackArrow />,
};
