import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { HTMLAttributes } from 'react';
export interface LinkItem {
    icon: FunctionalIconNames;
    link: string;
}
export interface LinkListProps extends HTMLAttributes<HTMLDivElement> {
    headline: string;
    links: LinkItem[];
}
//# sourceMappingURL=linkList.interface.d.ts.map