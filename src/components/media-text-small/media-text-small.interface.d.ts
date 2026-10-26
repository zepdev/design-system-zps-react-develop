import { BlocksContent } from '@strapi/blocks-react-renderer';
import { LinkTarget } from '../../../node_modules/@zepdev/design-system-component-library-react/dist/lib';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
export interface MediaTextSmallProps {
    headline: string;
    description?: BlocksContent;
    imageSrc: string;
    /** Makes the whole card a link, e.g. to a person's LinkedIn profile. */
    url?: string;
    /** Defaults to a new tab for external (`http(s)://`) links. */
    target?: LinkTarget;
    imageAlt?: string;
    variant?: GlobalVariants | GlobalVariantExtended;
    scrollId?: string;
}
//# sourceMappingURL=media-text-small.interface.d.ts.map