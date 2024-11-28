import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface AccordionPatternProps {
    topDescription?: BlocksContent;
    bottomDescription?: BlocksContent;
    contents: {
        title: string;
        accordionContent: BlocksContent;
    }[];
    variant?: GlobalVariants;
}
//# sourceMappingURL=accordion.interface.d.ts.map