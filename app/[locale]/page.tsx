import React from 'react';

import { AboutBlock } from '@/components/blocks/AboutBlock';
import { AuthorsBlock } from '@/components/blocks/AuthoresBlock';
import { ChooseCategoryBlock } from '@/components/blocks/ChooseCategoryBlock';
import { FeaturePosts } from '@/components/blocks/FeaturePosts';
import { WhyWeStarted } from '@/components/blocks/WhyWeStarted';
import { HomePageHeader } from '@/components/headers/HomePageHeader';

const App = () => {
  return (
    <div>
      <HomePageHeader />
      <FeaturePosts />
      <AboutBlock />
      <ChooseCategoryBlock />
      <WhyWeStarted />
      <AuthorsBlock />
    </div>
  );
};

export default App;
