export type PageProps = {
  params: {
    id: number;
  };
};

export type RootProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
