
export enum Publisher {
  COLUMBIA_UNIVERSITY_PRESS="COLUMBIA_UNIVERSITY_PRESS",
  NANJING_UNIVERSITY_PRESS="NANJING_UNIVERSITY_PRESS",
  XXX_PRESS="XXX_PRESS",
}

export namespace Mutation {

  export interface add_book {
    author_id: string;
    meta?: object;
    published_at: Date;
    publisher: Publisher;
    title: string;
  }
  
  export interface add_person {
    name: string;
  }
  
}

export namespace Person {

  export interface books {
    publisher?: Publisher;
    title_like?: string;
  }
  
}

export namespace Query {

  export interface books {
    author_id?: string;
    publisher?: Publisher;
    title_like?: string;
  }
  
  export interface persons {
    name_like?: string;
  }
  
}
