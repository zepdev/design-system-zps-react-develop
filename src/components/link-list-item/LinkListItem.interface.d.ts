import { BlocksContent } from '@strapi/blocks-react-renderer';
import { LinkProps } from '@zepdev/design-system-component-library-react/dist/src/components/link';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

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
    gtmId?: string;
    gtmHeadline?: string;
}
//# sourceMappingURL=LinkListItem.interface.d.ts.map