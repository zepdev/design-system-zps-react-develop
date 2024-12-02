import { MouseEvent } from 'react';
import { ZpsButtonVariant } from '../zps-button';
import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export type ProductItem = {
    title?: string;
    content: string;
};
export interface ProductHighLightProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    imageAlignment?: 'left' | 'right';
    productImageSrc: string;
    imageAlt: string;
    productDetails: ProductItem[];
    buttonText: string;
    buttonTitle?: string;
    buttonVariant?: ZpsButtonVariant;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    variant?: GlobalVariants;
}
//# sourceMappingURL=product-highlight.interface.d.ts.map