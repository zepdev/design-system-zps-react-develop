import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants, GlobalVariantExtended } from '../../interfaces/global-variants';
import { LinkTarget } from '../../../node_modules/@zepdev/design-system-component-library-react/dist/lib';

export interface MediaTextSmallProps {
    headline: string;
    description?: BlocksContent;
    imageSrc: string;
    target?: LinkTarget;
    imageAlt?: string;
    variant?: GlobalVariants | GlobalVariantExtended;
}
//# sourceMappingURL=media-text-small.interface.d.ts.map