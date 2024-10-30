import { HTMLAttributes } from 'react';
import { LinkListItemProps } from '../link-list-item';
import { GlobalVariants } from '../../interfaces/global-variants';
export interface MultiLinkListProps extends HTMLAttributes<HTMLDivElement> {
    linkLists: LinkListItemProps[];
    transparentLinkItem?: boolean;
    headline: string;
    variant?: GlobalVariants;
}
//# sourceMappingURL=MultiLinkList.interface.d.ts.map