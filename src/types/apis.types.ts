export interface IApiTechCompany {
  name: string;
  establishedAt: number;
  location: string;
  website: string;
  email: string;
  phone: string;
  socials: {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface IApiTechCompanyList {
  companies: IApiTechCompany[];
}

export interface IApiGovernmentWebsite {
  name: string;
  url: string;
  description: string;
}

export interface IApiGovernmentWebsiteList {
  items: IApiGovernmentWebsite[];
}
