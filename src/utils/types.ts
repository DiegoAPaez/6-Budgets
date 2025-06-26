export interface Budget {
    id: string;
    name: string;
    email: string;
    phone: string;
    services: ServiceOptions;
    webDetails?: WebsiteDetails;
    price: number;
    date: string;
}

export interface ServiceOptions {
    seo: boolean;
    ads: boolean;
    web: boolean;
}

export interface WebsiteDetails {
    pages: number;
    languages: number;
}
