import { BlocksContent } from '@strapi/blocks-react-renderer';
import { LinkTarget } from '../../../node_modules/@zepdev/design-system-component-library-react/dist/lib';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface MediaTextSmallProps {
    headline: string;
    description?: BlocksContent;
    imageSrc: string;
    target?: LinkTarget;
    imageAlt?: string;
    variant?: GlobalVariants | GlobalVariantExtended;
    scrollId?: string;
}
//# sourceMappingURL=media-text-small.interface.d.ts.map