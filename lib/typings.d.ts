interface Fielimage {
  fileName: string;
  url: string;
}

interface Fieimg {
  description: string;
  file: Fielimage;
  title: string;
}

export interface Image_fields {
  fields: Fieimg;
  metadata: string;
  sys: string;
}

export interface ImageDetails {
  description: string;
  file: {
    contentType: string;
    details: {
      image: {
        height: number;
        width: number;
      };
    };
    fileName: string;
    url: string;
  };
}

export interface Project {
  fields: {
    deploy: string;
    description: string;
    image: Image_fields[];
    tilte: string;
  };
  sys: {
    createdAt: string;
    environment: {
      sys: {
        id: string;
        linkType: string;
        type: string;
      };
    };
    id: string;
    locale: string;
    revision: number;
    space: {
      sys: {
        id: string;
        linkType: string;
        type: string;
      };
    };
    type: string;
    updatedAt: string;
  };
}
