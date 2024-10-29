import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from './headershort.interface';
export declare const headerShortHeadlineVariants: {
    ZPS: string[];
    CAT: string[];
    default: string;
};
export declare const headerShortTaglineVariants: {
    ZPS: string[];
    CAT: string[];
    default: string;
};
export declare const headlineClass: (props?: ({
    variant?: "default" | GlobalVariants | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare const taglineClass: (props?: ({
    variant?: "default" | GlobalVariants | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare const HeaderShort: ({ variant, tagline, headline, showArrow, className }: HeaderShortProps) => import("react/jsx-dev-runtime").JSX.Element;
//# sourceMappingURL=HeaderShort.d.ts.map