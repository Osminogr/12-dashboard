export type Author = {
    id: number;
    name: string;
    role: string;
  };


export type ProjectData = {
    image: string;
    name: string;
    description: string;
    tags: string[];
    authors: Author[]
  };
  