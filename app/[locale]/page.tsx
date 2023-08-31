import React from 'react';

import { AboutBlock } from '@/components/blocks/AboutBlock';
import { AuthorsBlock } from '@/components/blocks/AuthorsBlock';
import { ChooseCategoryBlock } from '@/components/blocks/ChooseCategoryBlock';
import { FeaturePosts } from '@/components/blocks/FeaturePosts';
import { JoinBlock } from '@/components/blocks/JoinBlock';
import { WeAre } from '@/components/blocks/WeAreBlock';
import { WhyWeStarted } from '@/components/blocks/WhyWeStartedBlock';
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
      <WeAre />
      <JoinBlock />
    </div>
  );
};

export default App;
