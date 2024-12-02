import { default as React } from 'react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface RichTextProps extends Partial<RichTextBaseProps> {
    content: BlocksContent;
    variant?: GlobalVariants | GlobalVariantExtended;
    className?: string;
}
export interface RichTextBaseProps {
    children: React.ReactNode;
    className?: string;
}
export interface HeaderProps extends RichTextBaseProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
}
export interface ListProps extends Omit<RichTextBaseProps, 'children'> {
    items: React.ReactNode[];
    ordered: boolean;
}
//# sourceMappingURL=richText.interface.d.ts.map