export interface ExclusiveOfferProps {
    name: string;
    title: string;
    description: string;
    content: string;
    features: string[];
    gallery: string[];
    packages: Package[];
}

export interface Package {
    name: string;
    price: string;
    features: string[];
}