export type AboutDescriptionModel = {
  heading: string;
  array?: string[] | null;
  headingStyle:
    | {
        marginBottom?: string;
      }
    | object;
  arrayStyle:
    | {
        listStyleType?: "number" | "disc";
        marginBottom?: string;
      }
    | object;
};

export type CompanyObjectModel = {
  id: number;
  heading: string;
  src: string;
  WEBPsrc?: string;
  alt: string;
  link: string;
};

export type ObjectCarouselModel = {
  id?: string | number;
  src: string;
  alt: string;
  WEBPsrc?: string;
};

export type TechnicalCardModel = {
  name: string;
  technicType: string;
  src: string;
  WEBPsrc?: string | null;
  alt: string;
  ladle: string;
  weight: string;
  swampCaterpillar: string;
  trackWidth: string;
  bladeWidth: string;
  diggingDepth: string;
  count: number;
  type:
    | "Экскаваторы"
    | "Погрузчики"
    | "Каток"
    | "Бульдозеры"
    | "Самосвалы"
    | "МАЗ/КАМАЗ";
};

export type ServiceModel = {
  id: number;
  heading: string;
  text: string;
};

export type TeamModel = {
  id: number;
  position: string;
  name: string;
  tel: string | null;
  person: "male" | "female";
};

export type FacilityModel = {
  id: number | string;
  src: string;
  WEBPsrc?: string | null;
  alt: string;
  heading: string;
  linkName: string;
};

export type ObjectDescriptionImageModel = {
  id: string;
  src: string;
  alt: string;
};

export type ObjectDescriptionModel = {
  location: string;
  year: string;
  sqrt: string;
  images: ObjectDescriptionImageModel[];
  heading: string;
  lists: string[];
  headingStyle: {
    marginBottom: string;
  };
  arrayStyle: {
    marginBottom: string;
  };
};
