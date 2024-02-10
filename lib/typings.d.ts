interface Fielimage {
  contentType: string;
  details: {
    image: {
      height: number;
      width: number;
    };
  };
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

export interface FieldsRecipe {
  deploy: string;
  description: string;
  image: Image_fields[];
  tilte: string;
  slug: string;
}

export interface Project {
  fields: {
    deploy: string;
    description: string;
    image: Image_fields[];
    tilte: string;
    slug: string;
    tecno: Image_fields[];
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

export interface General {
  fields: {
    general: string;
    fondo: Image_fields[];
    certificados:Image_fields[];
    media: Image_fields[];
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

export interface Proyectos {
  fields: {
    deploy: string;
    image: Image_fields;
    title: string;
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