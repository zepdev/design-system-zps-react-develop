import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ReactNode } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface MediaTextContentProps extends MediaTextImageProps, MediaTextButtonProps {
    headline?: string;
    tagline?: string;
    content: BlocksContent;
    variant?: GlobalVariants;
    imageAlignment?: 'left' | 'right';
}
export interface MediaTextBodyProps {
    children: ReactNode;
}
export interface MediaTextImageProps {
    src: string;
    alt: string;
}
export interface MediaTextButtonProps {
    labelPrimary?: string;
    labelSecondary?: string;
    onClickPrimary?: () => void;
    onClickSecondary?: () => void;
    urlPrimary?: string;
    urlSecondary?: string;
}
//# sourceMappingURL=MediaText.interface.d.ts.map