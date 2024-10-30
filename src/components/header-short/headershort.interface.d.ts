import { GlobalVariants } from '../../interfaces/global-variants';
export declare enum HeaderShortVariants {
    ZpsBg = "ZPS_BG",
    CatBg = "CAT_BG"
}
export interface HeaderShortProps extends HeaderShortComponentProps {
}
export interface HeaderShortComponentProps {
    variant?: GlobalVariants | HeaderShortVariants;
    hasBackground?: boolean;
    showArrow?: boolean;
    tagline?: string;
    headline?: string;
    className?: string;
}
//# sourceMappingURL=headershort.interface.d.ts.map