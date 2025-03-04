export interface CateringEventProps {
    id: string;
    title: string;
    href: string;
    description: string;
    images: string[];
    details: Detail[];
    features: string[];
    type: string;
}

export interface Detail {
    icon: string;
    text: string;
}