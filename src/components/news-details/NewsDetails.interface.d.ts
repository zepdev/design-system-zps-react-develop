import { BlocksContent } from '@strapi/blocks-react-renderer';
import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface NewsDetailsProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    imageSrc: string;
    imageAlt: string;
    imageDescription: string;
    content: BlocksContent;
    variant?: GlobalVariants;
}
//# sourceMappingURL=NewsDetails.interface.d.ts.map