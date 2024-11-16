export type Author = {
    name: string;
    id: number;
  };


export type ProjectPrewiew = {
    image: string;
    name: string;
    description: string;
    tags: string[];
    authors: Author[]
  };
  