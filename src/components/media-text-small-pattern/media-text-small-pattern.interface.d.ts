import { MediaTextSmallProps } from '../media-text-small';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';

export interface MediaTextSmallPatternProps extends Partial<HeaderLongProps> {
    items: MediaTextSmallProps[];
    id?: string;
    variant?: GlobalVariants | GlobalVariantExtended;
    scrollId?: string;
}
//# sourceMappingURL=media-text-small-pattern.interface.d.ts.map