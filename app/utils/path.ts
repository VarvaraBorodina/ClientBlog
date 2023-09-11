import { TEXT } from '@constants';

export const transformPath = (path: string) => {
  const absolutePath = path.replace(`/${TEXT.RUSSIAN}`, '').replace(`/${TEXT.ENGLISH}`, '');

  return absolutePath === '' ? '/' : absolutePath;
};
