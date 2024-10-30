import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponentProps, HeaderShortProps, HeaderShortVariants } from './headershort.interface';
export declare const headerShortHeadlineVariants: {
    ZPS_BG: string[];
    CAT_BG: string[];
    ZPS: string[];
    CAT: string[];
};
export declare const headerShortTaglineVariants: {
    ZPS: string[];
    CAT: string[];
    CAT_BG: string[];
    ZPS_BG: string[];
};
export declare const headlineClass: (props?: ({
    variant?: GlobalVariants | HeaderShortVariants | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare const taglineClass: (props?: ({
    variant?: GlobalVariants | HeaderShortVariants | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare const HeaderShortComponent: ({ tagline, headline, showArrow, className, variant }: HeaderShortComponentProps) => import("react/jsx-dev-runtime").JSX.Element;
export declare const HeaderShort: React.FC<HeaderShortProps>;
//# sourceMappingURL=HeaderShort.d.ts.map