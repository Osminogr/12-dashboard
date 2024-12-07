export type COMPOUND_EXTERNAL_LINK = {
    name: string,
    url: string
  };

export type COMPOUND_IMAGE = {
    name: string,
    url: string
  };

export type COMPOUND_BASEDATA = {
   description: string,
  };

export type COMPOUND_DATA = {
    base_name: string,
    links?: COMPOUND_EXTERNAL_LINK[],
    images?: COMPOUND_IMAGE[]
    basedata?: COMPOUND_BASEDATA
  };
  