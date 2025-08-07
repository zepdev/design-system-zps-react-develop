import { GlobalVariants, GlobalVariantExtended } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { MediaTextSmallProps } from '../media-text-small';

export interface MediaTextSmallPatternProps extends Partial<HeaderLongProps> {
    items: MediaTextSmallProps[];
    id?: string;
    variant?: GlobalVariants | GlobalVariantExtended;
}
//# sourceMappingURL=media-text-small-pattern.interface.d.ts.map