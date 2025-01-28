import { HTMLAttributes } from 'react';
import { LinkListItemProps } from '../link-list-item';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from '../header-short';

export interface MultiLinkListProps extends HTMLAttributes<HTMLDivElement>, HeaderShortProps {
    linkLists: LinkListItemProps[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isPatternPart?: boolean;
}
//# sourceMappingURL=MultiLinkList.interface.d.ts.map