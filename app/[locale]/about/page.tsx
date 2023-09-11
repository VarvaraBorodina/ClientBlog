import React, { lazy } from 'react';

import { AboutFullBlock } from '@components/blocks/AboutFullBlock';
import { AuthorsBlock } from '@components/blocks/AuthorsBlock';
import { ASSETS, TEXT } from '@constants';

const { ABOUT_BLOG, ABOUT_SUBTITLE, ABOUT_TEAM, ABOUT_CONTENT } = TEXT;
const { ABOUT_BLOG: ABOUT_BLOG_IMAGE, ABOUT_TEAM: ABOUT_TEAM_IMAGE } = ASSETS;
const authorsAmount = 8;

const JoinBlock = lazy(() =>
  import('@components/blocks/JoinBlock').then((module) => ({ default: module.JoinBlock }))
);

const ImageArticle = lazy(() =>
  import('@components/blocks/ImageArticle').then((module) => ({ default: module.ImageArticle }))
);

const About = () => (
  <>
    <AboutFullBlock />
    <ImageArticle
      title={ABOUT_TEAM}
      subtitle={ABOUT_SUBTITLE}
      text={ABOUT_CONTENT}
      type="left"
      image={ABOUT_TEAM_IMAGE}
    />
    <ImageArticle
      title={ABOUT_BLOG}
      subtitle={ABOUT_SUBTITLE}
      text={ABOUT_CONTENT}
      type="right"
      image={ABOUT_BLOG_IMAGE}
    />
    <AuthorsBlock authorsAmount={authorsAmount} />
    <JoinBlock />
  </>
);

export default About;
