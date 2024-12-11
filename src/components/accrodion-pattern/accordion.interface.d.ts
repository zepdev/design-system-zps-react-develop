import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';

export interface AccordionContent {
    title: string;
    accordionContent: BlocksContent;
}
export interface AccordionPatternProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    topDescription?: BlocksContent;
    bottomDescription?: BlocksContent;
    contents: AccordionContent[];
    variant?: GlobalVariants;
    headerPosition?: 'top' | 'left';
}
//# sourceMappingURL=accordion.interface.d.ts.map