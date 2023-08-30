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
  icon: string;
  description: string;
}

export interface Post {
  id: number;
  category: number;
  author: number;
  creationDate: string;
  title: string;
  description: string;
  content: string;
  image: string;
}
