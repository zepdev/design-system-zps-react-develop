import { GlobalVariants } from '../../interfaces/global-variants';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface CardMediaProps {
    imageSrc: string;
    imageAlt: string;
    imageOrientation?: 'vertical' | 'horizontal';
    headline: string;
    description: string;
    linkText: string;
    linkSrc: string;
    linkType?: 'internal-link' | 'external-link' | 'download';
    icon?: FunctionalIconNames;
    iconPosition?: 'before' | 'after';
    variant?: GlobalVariants;
    className?: string;
}
//# sourceMappingURL=cardmedia.interface.d.ts.map