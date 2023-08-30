import { TEXT } from '@/constants';

export const transformPath = (path: string) => {
  const absolutePath = path.replace(`/${TEXT.RUSSIAN}`, '');

  return absolutePath === '' ? '/' : absolutePath;
};
