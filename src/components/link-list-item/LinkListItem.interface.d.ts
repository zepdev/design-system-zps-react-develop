import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface LinkListLink extends LinkProps {
    linkType?: 'default' | 'download';
}
export interface LinkListItemProps {
    headline?: string;
    description?: BlocksContent;
    links: LinkListLink[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isMultiListItem?: boolean;
    className?: string;
    isFooterList?: boolean;
}
//# sourceMappingURL=LinkListItem.interface.d.ts.map