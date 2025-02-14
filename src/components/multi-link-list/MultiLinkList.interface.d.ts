import { HeaderShortProps } from '../header-short';
import { HTMLAttributes } from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { LinkListItemProps } from '../link-list-item';

export interface MultiLinkListProps extends HTMLAttributes<HTMLDivElement>, HeaderShortProps {
    linkLists: LinkListItemProps[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isPatternPart?: boolean;
    linkListItemClassname?: string;
    isFooterList?: boolean;
}
//# sourceMappingURL=MultiLinkList.interface.d.ts.map