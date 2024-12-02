import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface LinkItem {
    icon: FunctionalIconNames;
    link: string;
}
export interface ContentItem {
    headline: string;
    linkItems?: LinkItem[];
    listItems?: string[];
}
export interface ProcessChainProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    contentItems: ContentItem[];
    linkChain: boolean;
    variant?: GlobalVariants;
}
//# sourceMappingURL=processChain.interface.d.ts.map