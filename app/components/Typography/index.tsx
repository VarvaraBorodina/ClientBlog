import React, { memo } from 'react';

import commonStyles from '@/styles/common.module.scss';

import { TypographyType } from './types';

export const Typography = memo(({ as, children }: TypographyType) => {
  if (as === 'p') {
    return <p className={commonStyles.description}>{children}</p>;
  }

  if (as === 'h6') {
    return <h6 className={commonStyles.subtitle}>{children}</h6>;
  }

  return <h3 className={commonStyles.header}>{children}</h3>;
});
