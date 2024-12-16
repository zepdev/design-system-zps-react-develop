import { GlobalVariants } from '../../interfaces/global-variants';

export interface Point {
    x: number;
    y: number;
    description: string;
    label: string;
    step?: string;
}
export interface InfographicImageProps {
    imageUrl: string;
    imageAlt?: string;
    points: Point[];
    variant: GlobalVariants;
}
//# sourceMappingURL=infographic-image.interface.d.ts.map