import { ProductIcons } from '@zepdev/design-system-component-library-react';
export type ProductIconNames = keyof typeof ProductIcons;
export interface USPProps {
    textColor?: 'white' | 'blue';
    iconName: ProductIconNames;
    count: number;
    headline: string;
    description: string;
}
//# sourceMappingURL=usp.interface.d.ts.map