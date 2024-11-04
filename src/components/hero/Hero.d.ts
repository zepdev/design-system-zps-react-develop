import { GlobalVariants } from '../../interfaces/global-variants';
import { HeroArrowIconProps, HeroBodyProps, HeroButtonProps, HeroHeadlineProps, HeroImageProps, HeroProps } from './hero.interface';
export declare const useHeroContext: () => {
    variant: GlobalVariants;
};
declare const Hero: {
    ({ variant, children }: HeroProps): import("react/jsx-dev-runtime").JSX.Element;
    Image: ({ imageSrc, imageAlt }: HeroImageProps) => import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children }: HeroBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Header: ({ children }: HeroHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Button: ({ buttonPrimary, buttonSecondary }: HeroButtonProps) => import("react/jsx-dev-runtime").JSX.Element;
    IconArrow: ({ imageSrc, alt }: HeroArrowIconProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { Hero };
//# sourceMappingURL=Hero.d.ts.map