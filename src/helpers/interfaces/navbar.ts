export interface NavBarProps {
    id: string;
    name: string;
    category: string;
    description: string;
    path?: string;
    items?: { id: number; title: string; href: string; description: string }[];
}