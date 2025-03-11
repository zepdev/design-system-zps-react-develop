import { BlocksContent } from '@strapi/blocks-react-renderer';
import { MouseEvent } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { ZpsButtonVariant } from '../zps-button';

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
    id?: string;
    buttonUrl?: string;
}
//# sourceMappingURL=product-highlight.interface.d.ts.map