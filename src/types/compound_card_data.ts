export type COMPOUND_EXTERNAL_LINK = {
    name: string,
    link: string
  };

export type COMPOUND_IMAGE = {
    name: string,
    link: string
  };

export type COMPOUND_STRUCTURE = {
    type: string,
    link?: string,
    string?: string
  };

export type COMPOUND_DATA = {
    base_name: string,
    description: string,
    external_links?: COMPOUND_EXTERNAL_LINK[],
    images?: COMPOUND_IMAGE[]
    structures?: COMPOUND_STRUCTURE[]
  };
  