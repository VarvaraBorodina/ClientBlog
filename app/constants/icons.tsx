'use client';

import React from 'react';

import BackArrow from '@/assets/backArrow.svg';
import Business from '@/assets/categories/business.svg';
import Economy from '@/assets/categories/economy.svg';
import StartUp from '@/assets/categories/startup.svg';
import Technology from '@/assets/categories/technology.svg';
import Close from '@/assets/close.svg';
import Loader from '@/assets/loader.svg';
import Menu from '@/assets/menu.svg';
import NextArrow from '@/assets/nextArrow.svg';
import LogoBall from '@/assets/partners/logoBall.svg';
import LogoDrop from '@/assets/partners/logoDrop.svg';
import LogoHalf from '@/assets/partners/logoHalf.svg';
import LogoMap from '@/assets/partners/logoMap.svg';
import LogoSun from '@/assets/partners/logoSun.svg';

export const ICONS = {
  CLOSE: <Close />,
  MENU: <Menu />,

  BUSINESS: <Business />,
  ECONOMY: <Economy />,
  STARTUP: <StartUp />,
  TECHNOLOGY: <Technology />,

  NEXT_ARROW: <NextArrow />,
  BACK_ARROW: <BackArrow />,

  LOADER: <Loader />,
};

export const PARTNERS = [
  { logo: <LogoBall />, name: 'Ball' },
  { logo: <LogoDrop />, name: 'Drop' },
  { logo: <LogoHalf />, name: 'Half' },
  { logo: <LogoMap />, name: 'Map' },
  { logo: <LogoSun />, name: 'Sun' },
];
