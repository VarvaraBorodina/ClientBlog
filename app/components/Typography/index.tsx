import React, { memo } from 'react';

import { TypographyType } from './types';

import commonStyles from '@/styles/common.module.scss';

export const Typography = memo(({ as, children }: TypographyType) => {
  if (as === 'p') {
    return <p className={commonStyles.description}>{children}</p>;
  }

  if (as === 'h6') {
    return <h6 className={commonStyles.subtitle}>{children}</h6>;
  }

  return <h3 className={commonStyles.header}>{children}</h3>;
});
