import { ReactNode } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
export interface HeroProps {
    children: ReactNode;
    variant?: GlobalVariants;
}
export interface HeroBodyProps {
    children: ReactNode;
}
export interface HeroImageProps {
    imageSrc: string;
    imageAlt: string;
}
export interface HeroHeadlineProps {
    children: string;
}
export interface HeroButtonProps {
    buttonPrimary: string;
    buttonSecondary: string;
}
export interface HeroArrowIconProps {
    imageSrc: string;
    alt: string;
}
//# sourceMappingURL=hero.interface.d.ts.map