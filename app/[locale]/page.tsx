import React from 'react';

import { AboutBlock } from '@/components/blocks/AboutBlock';
import { AuthorsBlock } from '@/components/blocks/AuthorsBlock';
import { Carousel } from '@/components/blocks/Carousel';
import { CategoriesBlock } from '@/components/blocks/CategoriesBlock';
import { FeaturePosts } from '@/components/blocks/FeaturePosts';
import { JoinBlock } from '@/components/blocks/JoinBlock';
import { WeAre } from '@/components/blocks/WeAreBlock';
import { WhyWeStarted } from '@/components/blocks/WhyWeStartedBlock';
import { HomePageHeader } from '@/components/headers/HomePageHeader';
import { TEXT } from '@/constants';

const { CHOOSE_CATEGORY } = TEXT;

const App = () => {
  return (
    <>
      <HomePageHeader />
      <FeaturePosts />
      <AboutBlock />
      <CategoriesBlock title={CHOOSE_CATEGORY} titleAlign="center" />
      <WhyWeStarted />
      <AuthorsBlock authorsAmount={4} />
      <WeAre />
      <Carousel />
      <JoinBlock />
    </>
  );
};

export default App;
