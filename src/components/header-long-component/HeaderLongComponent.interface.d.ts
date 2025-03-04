import { MouseEvent } from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface LinkComponentProps {
    linkText?: string;
    linkHref?: string;
    type?: 'primary-button' | 'secondary-button' | 'link' | 'none';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    variant?: GlobalVariants | GlobalVariantExtended;
    className?: string;
}
export interface HeaderLongComponentProps extends LinkComponentProps {
    tagline?: string;
    headline: string;
    description?: BlocksContent;
}
//# sourceMappingURL=HeaderLongComponent.interface.d.ts.map