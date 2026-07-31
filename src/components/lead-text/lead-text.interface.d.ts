import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { MouseEvent } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from '../header-short';
export interface LeadTextProps extends Omit<HeaderShortProps, 'variant'> {
    content: BlocksContent;
    variant?: GlobalVariants;
    buttonPrimary?: string;
    buttonSecondary?: string;
    buttonPrimaryOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonSecondaryOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonPrimaryIcon?: FunctionalIconNames;
    buttonSecondaryIcon?: FunctionalIconNames;
    buttonPrimaryIconPosition?: 'left' | 'right';
    buttonSecondaryIconPosition?: 'left' | 'right';
    buttonPrimaryUrl?: string;
    buttonSecondaryUrl?: string;
}
//# sourceMappingURL=lead-text.interface.d.ts.map