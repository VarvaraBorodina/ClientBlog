import React from 'react';

import { AboutBlock } from '@/components/blocks/AboutBlock';
import { ChooseCategoryBlock } from '@/components/blocks/ChooseCategoryBlock';
import { FeaturePosts } from '@/components/blocks/FeaturePosts';
import { HomePageHeader } from '@/components/headers/HomePageHeader';

const App = () => {
  return (
    <div>
      <HomePageHeader />
      <FeaturePosts />
      <AboutBlock />
      <ChooseCategoryBlock />
    </div>
  );
};

export default App;
