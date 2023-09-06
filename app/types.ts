import { ICONS } from '@/constants';

export type CreationDate = {
  day: number;
  month: number;
  year: number;
};

export interface Author {
  id: number;
  name: string;
  lastName: string;
  description: string;
  photo: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  icon: keyof typeof ICONS;
  description: string;
}

export interface Post {
  id: number;
  category: number;
  author: number;
  creationDate: CreationDate;
  title: string;
  description: string;
  content: string;
  image: string;
  tags: number[];
}
