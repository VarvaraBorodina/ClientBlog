'use client';

import React, { useEffect, useRef, useState } from 'react';

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

const blocks = [
  <HomePageHeader />,
  <FeaturePosts />,
  <AboutBlock />,
  <CategoriesBlock title={CHOOSE_CATEGORY} titleAlign="center" />,
  <WhyWeStarted />,
  <AuthorsBlock authorsAmount={4} />,
  <WeAre />,
  <Carousel />,
  <JoinBlock />,
];

const App = () => {
  const [blocksOnPage, setBlockOnPage] = useState<JSX.Element[]>([blocks[0]]);
  const [lastAddedBlock, setLastAddedBlock] = useState(0);

  const endOfPage = useRef(null);

  const onInterSection = (enteries: IntersectionObserverEntry[]) => {
    if (enteries[0].isIntersecting && lastAddedBlock < blocks.length - 1) {
      setBlockOnPage((prevState) => [...prevState, blocks[lastAddedBlock + 1]]);
      setLastAddedBlock((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onInterSection, { threshold: 1 });
    if (endOfPage.current) {
      observer.observe(endOfPage.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [blocksOnPage]);

  return (
    <>
      {blocksOnPage.map((block, index) => (
        <div key={index}>{block}</div>
      ))}
      <div ref={endOfPage} />
    </>
  );
};

export default App;
