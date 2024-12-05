import { MouseEvent } from 'react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ZpsButtonVariant } from '../zps-button';
import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface ProductHighLightProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    imageAlignment?: 'left' | 'right';
    imageSrc: string;
    imageAlt: string;
    productDetails: BlocksContent[];
    buttonText: string;
    buttonTitle?: string;
    buttonVariant?: ZpsButtonVariant;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    variant?: GlobalVariants;
}
//# sourceMappingURL=product-highlight.interface.d.ts.map